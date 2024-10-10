# src/models/image_model.py

import tensorflow as tf
from tensorflow.keras import layers, models

class ImageModel:
    def __init__(self):
        self.model = self.build_model()

    def build_model(self):
        model = models.Sequential()
        model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)))
        model.add(layers.MaxPooling2D(pool_size=(2, 2)))
        model.add(layers.Flatten())
        model.add(layers.Dense(64, activation='relu'))
        model.add(layers.Dense(1))  # Assuming regression output
        model.compile(optimizer='adam', loss='mean_squared_error')
        return model

    def train(self, train_data, train_labels, epochs=10):
        self.model.fit(train_data, train_labels, epochs=epochs)

    def predict(self, test_data):
        return self.model.predict(test_data)

    def save(self, filepath):
        self.model.save(filepath)

    def load(self, filepath):
        self.model = models.load_model(filepath)

if __name__ == "__main__":
    # Example usage
    # This section can be filled in with appropriate training/testing code
    pass
