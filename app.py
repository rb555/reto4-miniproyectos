from flask import Flask, request, jsonify

app = Flask(__name__)

points = []

@app.route('/paint', methods=['POST'])
def paint():
    data = request.get_json()
    points.append(data)
    return jsonify({'message': 'Punto guardado correctamente'})

@app.route('/points', methods=['GET'])
def get_points():
    return jsonify(points)

if __name__ == '__main__':
    app.run()
