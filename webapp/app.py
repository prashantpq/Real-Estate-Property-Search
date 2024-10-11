from flask import Flask, render_template, request
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load the dataset
property_data = pd.read_csv('../data/raw/property_data1.csv')  # Ensure the path is correct

# Initialize the vectorizer and fit on the entire dataset descriptions
vectorizer = TfidfVectorizer()
vectorizer.fit(property_data['description'].fillna(''))

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get user inputs
        user_description = request.form.get('description')
        user_location = request.form.get('location')
        user_price = request.form.get('price')

        # Validate and process price
        try:
            user_price = float(user_price)
        except ValueError:
            return render_template('index.html', message="Please enter a valid price.")

        # Filter the dataset based on location
        filtered_properties = property_data[property_data['location'].str.contains(user_location, case=False, na=False)]

        # Filter based on price range (±20% of the user price)
        price_range = 0.2
        min_price = user_price * (1 - price_range)
        max_price = user_price * (1 + price_range)
        filtered_properties = filtered_properties[
            (filtered_properties['price'] >= min_price) & 
            (filtered_properties['price'] <= max_price)
        ]

        if filtered_properties.empty:
            return render_template('index.html', message="No properties found matching your criteria.")

        # Vectorize descriptions of filtered properties
        filtered_descriptions = filtered_properties['description'].fillna('')
        X_filtered = vectorizer.transform(filtered_descriptions)

        # Vectorize user description
        user_input_vectorized = vectorizer.transform([user_description])

        # Compute cosine similarity
        similarity_scores = cosine_similarity(user_input_vectorized, X_filtered).flatten()

        # Add similarity scores to the DataFrame
        filtered_properties = filtered_properties.copy()
        filtered_properties['similarity'] = similarity_scores

        # Sort properties by similarity score
        top_properties = filtered_properties.sort_values(by='similarity', ascending=False).head(5)

        # Prepare data for display
        properties_list = top_properties.to_dict(orient='records')

        return render_template('index.html', properties=properties_list)

    return render_template('index.html')
    
if __name__ == '__main__':
    app.run(debug=True)
