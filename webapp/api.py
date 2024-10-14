# webapp/api.py
from flask import Blueprint, request, jsonify
import pandas as pd

app = Blueprint('api', __name__)

# Load the cleaned property dataset
data_path = '../data/processed/listings_clean.csv'  # Update with the correct path
df = pd.read_csv(data_path)

@app.route('/api/search', methods=['POST'])
def search_properties():
    input_data = request.get_json()

    # Get user inputs and handle missing values
    description = input_data.get('description', '').lower()
    location = input_data.get('location', '').lower()
    max_price = input_data.get('price', None)

    # Validate max_price
    if max_price is not None:
        try:
            max_price = float(max_price)
        except ValueError:
            return jsonify({"message": "Invalid price value"}), 400

    # Filter the dataframe based on the user inputs
    filtered_df = df[
        (df['description'].str.contains(description, case=False, na=False)) &
        (df['location'].str.contains(location, case=False, na=False))
    ]

    if max_price is not None:
        filtered_df = filtered_df[filtered_df['price'] <= max_price]

    # Check if any properties match the criteria
    if filtered_df.empty:
        return jsonify({"message": "No properties found"}), 404

    # Sort and return the top 5 results
    top_results = filtered_df.head(5).to_dict(orient='records')

    return jsonify(top_results)
