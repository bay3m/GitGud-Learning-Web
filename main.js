hardware_display_main = [
    {
        "name": "Motherboard",
        "image": "static/images/Motherboard_img.jpeg",
        "image_src" : "https://pin.it/5OkX2fCuW",
        "image_alt" : "Motherboard Image",
        "description": "The main circuit board that connects all components of the computer."
    },
    {
        "name": "CPU",
        "image": "static/images/CPU_img.jpeg",
        "image_src" : "https://pin.it/5OkX2fCuW",
        "image_alt" : "CPU Image",
        "description": "The brain of the computer that performs calculations and executes instructions."
    },
    {
        "name": "RAM",
        "image": "static/images/RAM_img.jpeg",
        "image_src" : "https://pin.it/5OkX2fCuW",
        "image_alt" : "RAM Image",
        "description": "Short-term memory where active programs and data are stored for quick access."
    },
    {
        "name": "SSD",
        "image": "static/images/SSD_img.jpeg",
        "image_src" : "https://pin.it/5OkX2fCuW",
        "image_alt" : "SSD Image",
        "description": "Fast storage device that holds your operating system, applications, and files."
    }
]

quiz_topics = ["cpu", "ram", "basic computer knowledge"]

document.addEventListener('DOMContentLoaded', () => {
    hardware_carousel_in_index = document.querySelector('#hardware_carousel');
    console.log("Loaded");

    hardware_display_main.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index == 0 ? 'active' : ''}`;
        console.log(item);

        div.innerHTML = `
            <div class="carousel_item">
                <h4>${ item.name }</h4>
                
                <img src="${ item.image }" alt="${ item.image_alt }" style="width: 80%; height: auto;">
                
                <p class="img_source">
                    Image source: <a href="${ item.image_src }" class="img_source_link">Pinterest</a>
                </p>
                
                <p>${ item.description }</p>                              
            </div>
        `;
        console.log(div);
        console.log(hardware_carousel_in_index);
        hardware_carousel_in_index.appendChild(div);
    });
});