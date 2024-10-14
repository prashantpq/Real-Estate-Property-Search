# webapp/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from api import app as api_app

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Serve the API from the same Flask app
app.register_blueprint(api_app)

if __name__ == '__main__':
    app.run(debug=True)
