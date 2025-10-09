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