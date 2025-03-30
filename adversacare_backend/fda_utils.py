import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import squarify 
import io
import base64
import os
import matplotlib
from matplotlib import font_manager
from collections import Counter
import requests
import numpy as np
import re

matplotlib.use('agg')

# === FDA API URL Constructor ===
def create_url(query_list, base_url, api_key, filter_category, query_limit=1000):
    list_length = len(query_list)
    url_plus_api = f"{base_url}api_key={api_key}&search="

    for term in query_list:
        url_plus_api += filter_category + f':"{term}"'
        list_length -= 1
        if list_length != 0:
            url_plus_api += "+AND+"

    url_plus_api += f"&limit={query_limit}"
    return url_plus_api

# === Fetch data from FDA ===
def fetch_data(url):
    response = requests.get(url)
    data = response.json()
    return pd.json_normalize(data["results"])


def transform_data(df_raw):
    df = df_raw.copy()

    # extract seriousness columns
    serious_cols = [col for col in df.columns if re.search("serious", col)]
    
    top_features = [
        "patient.patientsex",
        "patient.patientonsetage",
        "patient.drug",
        "patient.reaction"
    ] + serious_cols

    df = df[top_features]

    df['drug_info'] = df['patient.drug'].apply(
        lambda drugs: [(d.get('medicinalproduct'), d.get('drugcharacterization')) for d in drugs]
    )

    df['observed_reactions'] = df['patient.reaction'].apply(
        lambda reactions: [r.get('reactionmeddrapt') for r in reactions]
    )

    df = df.drop(['patient.drug', 'patient.reaction'], axis=1)

    def integer_conversion(val):
        return int(val) if pd.notna(val) else np.nan

    def serious_conversion(val):
        return int(val) if pd.notna(val) else 0

    df_transformed = df.copy()
    select_cols = list(df_transformed.columns)[:2]
    for col in select_cols:
        df_transformed[col] = df_transformed[col].apply(integer_conversion)

    for col in serious_cols:
        df_transformed[col] = df_transformed[col].apply(serious_conversion)

    if 'patient.patientonsetage' in df_transformed.columns:
        df_transformed['patient.patientonsetage'] = df_transformed['patient.patientonsetage'].fillna(
            df_transformed['patient.patientonsetage'].median()
        )

    return df_transformed, serious_cols


# === Convert plot to base64 ===
def _fig_to_base64():
    buf = io.BytesIO()
    plt.tight_layout()
    plt.savefig(buf, format='png')
    plt.close()
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode('utf-8')
    return img_base64

# === PIE CHART ===
def plot_seriousness_pie(df3, serious_cols, font_path=None):
    df_seriousness = df3.copy()
    df_seriousness = df_seriousness[serious_cols]

    if 'serious' in df_seriousness.columns:
        df_seriousness = df_seriousness.drop('serious', axis=1)

    df_seriousness.columns = df_seriousness.columns.str.replace(r'^seriousness', '', regex=True)
    seriousness_counts = (df_seriousness != 0).sum()
    seriousness_counts = seriousness_counts[seriousness_counts > 0]
    seriousness_pct = (seriousness_counts / seriousness_counts.sum()).sort_values(ascending=False)

    font_prop = None
    if font_path and os.path.isfile(font_path):
        font_prop = font_manager.FontProperties(fname=font_path)

    sns.set_theme()
    colors = sns.color_palette("viridis", n_colors=len(seriousness_pct))

    fig, ax = plt.subplots(figsize=(7, 7))
    wedges, texts, autotexts = ax.pie(
        seriousness_pct,
        labels=seriousness_pct.index,
        autopct=lambda p: f'{int(round(p))}%',
        startangle=140,
        colors=colors,
        textprops={'fontsize': 14, 'fontproperties': font_prop} if font_prop else {'fontsize': 14}
    )

    for autotext in autotexts:
        autotext.set_color('white')
        if font_prop:
            autotext.set_fontproperties(font_prop)

    ax.set_title(
        "Percentage of Adverse Events by Seriousness Category",
        fontsize=18,
        fontweight='bold',
        fontproperties=font_prop if font_prop else None
    )
    ax.axis('equal')
    return _fig_to_base64()

# === BAR CHART ===
def plot_characterization_bar(df3, drug_query_list):
    key_drugs = set(drug_query_list)
    char_labels = {1: "1: Suspect", 2: "2: Concomitant", 3: "3: Interacting"}

    rows = []
    for drug_list in df3['drug_info']:
        if isinstance(drug_list, list):
            for drug_name, char_score in drug_list:
                clean_name = drug_name.strip().rstrip('.')
                label = clean_name if clean_name in key_drugs else "Other"
                rows.append((label, int(char_score)))

    flat_df = pd.DataFrame(rows, columns=["Drug", "Char_Score"])
    grouped = flat_df.groupby(['Char_Score', 'Drug']).size().unstack(fill_value=0)
    grouped = grouped[grouped.sum(axis=0).sort_values().index]

    plt.figure(figsize=(12, 8))
    ax = grouped.plot(kind='bar', stacked=True, colormap='viridis_r', ax=plt.gca())
    ax.set_xticklabels([char_labels.get(i, str(i)) for i in grouped.index], rotation=0, fontsize=12)
    ax.set_title("Distribution of Drugs by Characterization Score", fontsize=16)
    ax.set_xlabel("Characterization Score", fontsize=14)
    ax.set_ylabel("Count of Mentions", fontsize=14)
    ax.legend(title="Drug", fontsize=10, title_fontsize=12, bbox_to_anchor=(1.05, 1), loc='upper left')
    return _fig_to_base64()

# === TREEMAP ===
def plot_top_reactions_treemap(df3, max_chars_per_line=10):
    all_reactions = [reaction for sublist in df3['observed_reactions'] for reaction in sublist]
    reaction_counts = Counter(all_reactions)
    reaction_df = pd.DataFrame(reaction_counts.items(), columns=['Reaction', 'Frequency'])
    top_reactions = reaction_df.nlargest(10, 'Frequency')

    def wrap_label(label, max_chars):
        words = label.split()
        wrapped_label = ''
        line = ''
        for word in words:
            if len(line) + len(word) + 1 <= max_chars:
                line += (word + ' ')
            else:
                wrapped_label += line.rstrip() + '\\n'
                line = word + ' '
        wrapped_label += line.rstrip()
        return wrapped_label

    top_reactions['Wrapped_Label'] = top_reactions['Reaction'].apply(lambda x: wrap_label(x, max_chars_per_line))
    sizes = top_reactions['Frequency']
    labels = top_reactions['Wrapped_Label']
    palette = sns.color_palette('viridis', n_colors=14)
    colors = palette[:len(sizes)]

    plt.figure(figsize=(12, 8))
    squarify.plot(sizes=sizes, label=labels, color=colors, alpha=0.7, text_kwargs={'fontsize': 18, 'color': 'white'})
    plt.axis('off')
    plt.title('Top 10 Observed Reactions Across Different Drugs', fontsize=20)
    return _fig_to_base64()
