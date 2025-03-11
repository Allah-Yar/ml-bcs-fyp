from flask import Flask, request, jsonify
from models import Model

app = Flask(__name__)
model = Model()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict(data)
    return jsonify(prediction)

if __name__ == '__main__':
    model.load_model('path/to/your/model')
    app.run(host='0.0.0.0', port=5000)