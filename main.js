const imagesContainer = document.querySelector('#images');

createElement = (element, className) => {
    // Simple function for defining Elements and class names of same
    const el = document.createElement(element);
    el.className = className;
    return el;
};

fetch("images.json")
    .then(
        response => response.json()
    )
    .then(
        data => {
            let images = data.map(image => [
                image.name,
                image.link
            ]);

            images.forEach((image) => {
                const imgCard = createElement("div", "imgCard");
                const iName = createElement("h2");
                const i = createElement("img", "image");

                i.setAttribute("src", image[1]);
                iName.innerHTML += image[0];

                imagesContainer.append(imgCard);
                imgCard.append(
                    iName, i
                );
            })
        }
);