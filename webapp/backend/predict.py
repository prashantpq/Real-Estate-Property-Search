import sys
import joblib
import numpy as np

# Load the model
model = joblib.load('D:/Xampp files/htdocs/chirayu/pbl real estate/Real-Estate-Property-Search/models/text_model/linear_regression_model.pkl')

# Get input data from the command-line arguments
data = list(map(float, sys.argv[1:]))

# Reshape and predict (assuming you expect a single sample for simplicity)
input_data = np.array(data).reshape(1, -1)
prediction = model.predict(input_data)

# Print the prediction (so Node.js can capture the output)
print(prediction[0])
