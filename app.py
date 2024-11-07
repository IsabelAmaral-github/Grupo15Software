from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def index():
    # A página de início é renderizada
    return render_template('index.html')

@app.route('/explore')
def explore():
    # Quando o usuário acessa /explore, a página explore.html é renderizada
    return render_template('explore.html')

if __name__ == '__main__':
    app.run(debug=True)