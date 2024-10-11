import pandas as pd
import re

def preprocess_text(text):
    text = text.lower()  # Convert to lowercase
    text = re.sub(r'\d+', '', text)  # Remove numbers
    text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
    return text

def preprocess_data(csv_file):
    data = pd.read_csv(csv_file)
    data['description'] = data['description'].apply(preprocess_text)
    data['location'] = data['location'].apply(preprocess_text)
    return data
