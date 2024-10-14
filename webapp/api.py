# webapp/api.py
from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load the cleaned property dataset
data_path = '../data/processed/listings_clean.csv'  # Update with the correct path
df = pd.read_csv(data_path)

@app.route('/api/search', methods=['POST'])
def search_properties():
    input_data = request.get_json()
    description = input_data.get('description', '').lower()
    location = input_data.get('location', '').lower()
    max_price = input_data.get('price', None)

    # Filter the dataframe based on the user inputs
    filtered_df = df[
        (df['description'].str.contains(description, case=False, na=False)) &
        (df['location'].str.contains(location, case=False, na=False))
    ]

    if max_price:
        filtered_df = filtered_df[filtered_df['price'] <= float(max_price)]

    # Sort and return the top 5 results
    top_results = filtered_df.head(5).to_dict(orient='records')

    return jsonify(top_results)

if __name__ == '__main__':
    app.run(debug=True)
