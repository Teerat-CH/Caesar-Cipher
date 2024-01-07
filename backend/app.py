from flask import Flask, request, jsonify
from flask_cors import CORS
from CeasarCipher import CaesarCipher

app = Flask(__name__)
CORS(app)

features = {
    'reverseStatus' : False,
    'removeSpaceStatus' : False,
}

key = {
    'sliderValue' : 1
}

@app.route('/slider', methods=['POST'])
def slider():
    data = request.get_json()
    key['sliderValue'] = int(data.get('sliderValue'))
    return jsonify({'sliderValue': features['sliderValue']})

@app.route('/reverse', methods=['POST'])
def reverse():
    data = request.get_json()
    features['reverseStatus'] = data.get('reverseStatus')
    return jsonify({'reverseStatus': features['reverseStatus']})

@app.route('/removeSpace', methods=['POST'])
def removeSpace():
    data = request.get_json()
    features['removeSpaceStatus'] = data.get('removeSpaceStatus')
    return jsonify({'removeSpaceStatus': features['removeSpaceStatus']})

@app.route('/encrypt', methods=['GET', 'POST'])
def encrypt_text():
    data = request.get_json()
    text = data.get('text', '')
    reverse_value = features['reverseStatus']
    removeSpace_value = features['removeSpaceStatus']
    slider_value = key['sliderValue']
    transformed_text = CaesarCipher(text, slider_value, reverse_value, removeSpace_value)
    return jsonify({'transformed_text': transformed_text})

@app.route('/decrypt', methods=['GET', 'POST'])
def decrypt_text():
    data = request.get_json()
    text = data.get('text', '')
    reverse_value = features['reverseStatus']
    removeSpace_value = features['removeSpaceStatus']
    slider_value = key['sliderValue']
    transformed_text = CaesarCipher(text, -slider_value, reverse_value, removeSpace_value)
    return jsonify({'transformed_text': transformed_text})

if __name__ == '__main__':
    app.run(debug=True)