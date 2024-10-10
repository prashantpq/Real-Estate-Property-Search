# src/models/text_model.py

from sklearn.ensemble import RandomForestRegressor
import joblib

class TextModel:
    def __init__(self):
        self.model = RandomForestRegressor()

    def train(self, X_train, y_train):
        self.model.fit(X_train, y_train)

    def predict(self, X_test):
        return self.model.predict(X_test)

    def save(self, filepath):
        joblib.dump(self.model, filepath)

    def load(self, filepath):
        self.model = joblib.load(filepath)

if __name__ == "__main__":
    # Example usage
    # This section can be filled in with appropriate training/testing code
    pass
