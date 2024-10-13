from flask import Flask, request, jsonify
import random  # Replace with your actual data retrieval logic

app = Flask(__name__)

@app.route('/api/search', methods=['POST'])
def search():
    input_data = request.json  # Get the input data from the request
    print("Received input data:", input_data)  # Debugging line

    # Simulating a search for properties (Replace with your actual search logic)
    results = [
        {"title": f"Flat {i}", "description": f"Description of Flat {i}", "price": random.randint(1000000, 5000000)}
        for i in range(1, 6)
    ]

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
