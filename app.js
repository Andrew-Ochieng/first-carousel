// initialize the variables
const carousel = document.getElementById('carousel')
const image = document.getElementById('image')

const images = [
    "./struggle.jpg",
    "./start.jpeg",
    "./breakthrough.jpeg"
]


let i = 0;

function slideShow() {
    image.src = images[i];

    if (i < images.length-1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(() => {
        slideShow()
    }, 3000);
}


window.onload = slideShow;





