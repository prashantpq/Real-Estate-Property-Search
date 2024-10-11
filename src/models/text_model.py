from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense

def build_text_model(vocab_size, embedding_dim, input_length):
    model = Sequential([
        Embedding(vocab_size, embedding_dim, input_length=input_length),
        LSTM(128, return_sequences=False),
        Dense(64, activation='relu'),
        Dense(1)  # Predicting similarity score or price
    ])
    model.compile(optimizer='adam', loss='mse', metrics=['mae'])
    return model
