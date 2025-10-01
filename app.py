from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder="application/templates", static_folder="application/static")

@app.route("/")
def index():
    return render_template("index.html")