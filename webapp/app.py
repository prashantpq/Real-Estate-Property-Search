from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load dataset
data_path = '../data/processed/listings_clean.csv'
df = pd.read_csv(data_path)

@app.route('/api/search', methods=['POST'])
def search_properties():
    data = request.json
    description = data.get('description', '').lower()
    location = data.get('location', '').lower()
    price = float(data.get('price', 0))

    # Filter the dataset
    filtered_df = df[
        (df['description'].str.lower().str.contains(description)) &
        (df['location'].str.lower().str.contains(location)) &
        (df['price'] <= price)
    ].head(5)

    # Convert results to a list of dictionaries
    results = filtered_df.to_dict(orient='records')

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
