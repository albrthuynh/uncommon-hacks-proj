from flask import Flask, jsonify, request
import matplotlib.pyplot as plt
import io
import re
import pandas as pd
import numpy as np

from fda_utils import (
    create_url,
    fetch_data,
    plot_seriousness_pie,
    plot_characterization_bar,
    plot_top_reactions_treemap,
    transform_data
)


app = Flask(__name__)

@app.route("/")
def home():

    query_list = request.args.getlist("q")
    if not query_list:
        return jsonify({"error": "Missing drug list. Use ?q=DRUG1&q=DRUG2"}), 400

    api_key = "JRLl3R4GkcNCPAmwzo4vfUIfwttQbJlcv3ghqaJg"
    base_url = "https://api.fda.gov/drug/event.json?"
    filter_category = "patient.drug.medicinalproduct"

    url = create_url(query_list, base_url, api_key, filter_category)
    df_raw = fetch_data(url)
    df_transformed, serious_cols = transform_data(df_raw)

    pie_img = plot_seriousness_pie(df_transformed, serious_cols)
    bar_img = plot_characterization_bar(df_transformed, query_list)
    treemap_img = plot_top_reactions_treemap(df_transformed)

    return jsonify([
        {"type": "pie", "base64": pie_img},
        {"type": "bar", "base64": bar_img},
        {"type": "treemap", "base64": treemap_img}
    ])  

if __name__ == "__main__":
    app.run(debug=True)