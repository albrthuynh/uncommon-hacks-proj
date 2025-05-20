import pandas as pd
import json
import matplotlib.pyplot as plt
import seaborn as sns

with open('all_drugs.json', 'r') as f:
    all_drugs = [item['label'] for item in json.load(f)]

df = pd.read_csv('patients_adr.csv')

print(df[['age', 'gender']].describe())
print(df['gender'].value_counts())

adr_counts = df['adr_type'].value_counts()
print(adr_counts)

pivot = df.pivot_table(index='drug_name', columns='adr_type', values='patient_id', aggfunc='count', fill_value=0)
plt.figure(figsize=(12, 8))
sns.heatmap(pivot, cmap='Reds')
plt.title('Drug-ADR Type Distribution')
plt.show()

gender_adr = df.groupby('gender')['adr_type'].count()
gender_adr.plot(kind='bar')
plt.title('ADR Count by Gender')
plt.ylabel('ADR Count')
plt.show()

drug_top = df['drug_name'].value_counts().head(20)
drug_top.plot(kind='barh')
plt.title('Top 20 Drugs Used')
plt.xlabel('Count')
plt.show()