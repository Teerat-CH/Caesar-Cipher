from flask import Flask, request, jsonify
from flask_cors import CORS
from CeasarCipher import CaesarCipher

app = Flask(__name__)
CORS(app)

features = {
    'reverseStatus' : False,
}

@app.route('/reverse', methods=['POST'])
def reverse():
    data = request.get_json()
    features['reverseStatus'] = data.get('checkStatus')
    return jsonify({'reverseStatus': features['reverseStatus']})

@app.route('/encrypt', methods=['GET', 'POST'])
def encrypt_text():
    data = request.get_json()
    text = data.get('text', '')
    reverse_value = features['reverseStatus']
    transformed_text = CaesarCipher(text, 2, reverse_value, False)
    return jsonify({'transformed_text': transformed_text})

@app.route('/decrypt', methods=['POST'])
def decrypt_text():
    data = request.get_json()
    text = data.get('text', '')
    reverse_value = features['reverseStatus']
    transformed_text = CaesarCipher(text, -2, reverse_value, False)
    return jsonify({'transformed_text': transformed_text})

if __name__ == '__main__':
    app.run(debug=True)