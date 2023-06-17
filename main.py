from flask import Flask, request

app = Flask(__name__)

@app.route('/draw', methods=['POST'])
def receive_drawing_data():
    drawing_data = request.get_json()
    
    print(drawing_data)
    return 'Dibujo recibido correctamente'

if __name__ == '__main__':
    app.run()
