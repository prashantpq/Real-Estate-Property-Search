# src/models/multimodal_model.py

import tensorflow as tf
from tensorflow.keras import layers, Model

class MultimodalModel:
    def __init__(self, text_model, image_model):
        self.text_model = text_model
        self.image_model = image_model
        self.model = self.build_model()

    def build_model(self):
        # Assuming both models output a single value
        text_input = layers.Input(shape=(None,))  # Text input shape
        image_input = layers.Input(shape=(224, 224, 3))  # Image input shape

        # Text model branch
        text_output = self.text_model(text_input)

        # Image model branch
        image_output = self.image_model(image_input)

        # Combine outputs
        combined = layers.concatenate([text_output, image_output])
        output = layers.Dense(1)(combined)  # Assuming regression output

        model = Model(inputs=[text_input, image_input], outputs=output)
        model.compile(optimizer='adam', loss='mean_squared_error')
        return model

    def train(self, text_data, image_data, labels, epochs=10):
        self.model.fit([text_data, image_data], labels, epochs=epochs)

    def predict(self, text_data, image_data):
        return self.model.predict([text_data, image_data])

    def save(self, filepath):
        self.model.save(filepath)

    def load(self, filepath):
        self.model = tf.keras.models.load_model(filepath)

if __name__ == "__main__":
    # Example usage
    # This section can be filled in with appropriate training/testing code
    pass
