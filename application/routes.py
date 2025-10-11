from flask import render_template, Blueprint

main = Blueprint("main", __name__)

@main.route("/")
def index():
    hardware = [
        {
            "name": "Motherboard",
            "image": "/static/images/Motherboard_img.jpeg",
            "image_src" : "https://pin.it/5OkX2fCuW",
            "image_alt" : "Motherboard Image",
            "description": "The main circuit board that connects all components of the computer."
        },
        {
            "name": "CPU",
            "image": "/static/images/CPU_img.jpeg",
            "image_src" : "https://pin.it/5OkX2fCuW",
            "image_alt" : "CPU Image",
            "description": "The brain of the computer that performs calculations and executes instructions."
        },
        {
            "name": "RAM",
            "image": "/static/images/RAM_img.jpeg",
            "image_src" : "https://pin.it/5OkX2fCuW",
            "image_alt" : "RAM Image",
            "description": "Short-term memory where active programs and data are stored for quick access."
        },
        {
            "name": "SSD",
            "image": "/static/images/SSD_img.jpeg",
            "image_src" : "https://pin.it/5OkX2fCuW",
            "image_alt" : "SSD Image",
            "description": "Fast storage device that holds your operating system, applications, and files."
        }
    ]

    return render_template("index.html", hardware=hardware)

@main.route("/computer")
def computer():
    return render_template("computer.html")

@main.route("/cpu")
def cpu():
    return render_template("cpu.html")

@main.route("/ram")
def ram():
    return render_template("ram.html")

@main.route("/storage")
def storage():
    return render_template("storage.html")

@main.route("/graphic")
def graphic():
    return render_template("graphic.html")

@main.route("/sound")
def sound():
    return render_template("sound.html")

@main.route("/case")
def case():
    return render_template("case.html")

@main.route("/monitor")
def monitor():
    return render_template("monitor.html")

@main.route("/mouse")
def mouse():
    return render_template("mouse.html")

@main.route("/keyboard")
def keyboard():
    return render_template("keyboard.html")

@main.route("/speaker")
def speaker():
    return render_template("speaker.html")