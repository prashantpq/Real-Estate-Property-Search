from flask import Flask, render_template, request
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle
import os

app = Flask(__name__)

# Load the preprocessed dataset (assuming it's already cleaned and processed)
property_data = pd.read_csv('../data/processed/listings_clean.csv')

# Check if the vectorizer model exists, if not, create and save it
vectorizer_path = '../models/text_model/vectorizer.pkl'
if not os.path.exists(vectorizer_path):
    # Initialize the TfidfVectorizer
    vectorizer = TfidfVectorizer()

    # Fit the vectorizer on the property descriptions
    vectorizer.fit(property_data['description'])

    # Save the fitted vectorizer to a pickle file
    with open(vectorizer_path, 'wb') as f:
        pickle.dump(vectorizer, f)

    print("Vectorizer created and saved successfully!")
else:
    # Load the vectorizer model if it already exists
    with open(vectorizer_path, 'rb') as f:
        vectorizer = pickle.load(f)

# Transform the property descriptions to get the document-term matrix
X = vectorizer.transform(property_data['description'])

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get the input description from the form
        user_input = request.form['description']

        # Transform the user's input
        user_input_vec = vectorizer.transform([user_input])

        # Compute cosine similarity between the input and dataset
        similarity = cosine_similarity(user_input_vec, X)

        # Get the top 5 most similar properties
        top_5_indices = similarity[0].argsort()[-5:][::-1]
        similar_properties = property_data.iloc[top_5_indices]

        # Prepare data to be displayed on the front-end
        property_list = []
        for index, row in similar_properties.iterrows():
            property_list.append({
                'description': row['description'],
                'location': row['location'],
                'price': row['price']
            })

        # Print the similar properties to the console
        print("Similar properties:")
        for prop in property_list:
            print(f"Description: {prop['description']}, Location: {prop['location']}, Price: {prop['price']}")

        # Render the template with the similar properties
        return render_template('index.html', similar_properties=property_list)

    return render_template('index.html', similar_properties=[])

if __name__ == '__main__':
    app.run(debug=True)
