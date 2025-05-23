from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def base():
    return render_template('base.html')

@app.route('/messages')
def displayMessages():
    return render_template('./messagesTemplate/messages.html')

if __name__ == '__main__':
    app.run(debug=True)