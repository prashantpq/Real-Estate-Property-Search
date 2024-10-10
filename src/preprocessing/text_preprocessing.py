# src/preprocessing/text_preprocessing.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer

def preprocess_text(text):
    # Simple text preprocessing steps: Lowercasing, removing punctuation, etc.
    text = text.lower()
    text = ''.join(char for char in text if char.isalnum() or char.isspace())
    return text

def vectorize_text(data):
    vectorizer = TfidfVectorizer(preprocessor=preprocess_text)
    text_vectors = vectorizer.fit_transform(data)
    return text_vectors, vectorizer

if __name__ == "__main__":
    # Example usage
    data_path = '../data/processed/listings_clean.csv'
    df = pd.read_csv(data_path)
    text_data = df['description']  # Assuming there is a 'description' column
    vectors, vectorizer = vectorize_text(text_data)
    print("Text vectors shape:", vectors.shape)
