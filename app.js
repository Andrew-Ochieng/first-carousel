// initialize the variables
const carousel = document.getElementById('carousel')
const image = document.getElementById('image')

const images = [
    "./breakthrough.jpeg",
    "./struggle.jpg",
    "./start.jpeg",
    "./moon.jpg"
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


// onpage load
// window.onload = slideShow;

// on pageload alternative
document.addEventListener("DOMContentLoaded", () => {
    slideShow()
})



