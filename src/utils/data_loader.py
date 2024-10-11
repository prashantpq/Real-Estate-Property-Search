import pandas as pd
from sklearn.model_selection import train_test_split

def load_data(csv_file):
    data = pd.read_csv(csv_file)
    X = data[['description', 'location', 'price']]  # Features
    y = data['price']  # Target variable (for regression)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    return X_train, X_test, y_train, y_test
