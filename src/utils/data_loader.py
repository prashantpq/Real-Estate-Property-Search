# src/utils/data_loader.py

import pandas as pd

def load_data(data_path):
    df = pd.read_csv(data_path)
    return df

def split_data(df, features, target):
    X = df[features]
    y = df[target]
    return X, y

if __name__ == "__main__":
    # Example usage
    data_path = '../data/processed/listings_clean.csv'
    df = load_data(data_path)
    features = ['feature1', 'feature2', 'feature3']  # Replace with actual feature names
    target = 'target'  # Replace with actual target variable name
    X, y = split_data(df, features, target)
    print("Features and target loaded.")
