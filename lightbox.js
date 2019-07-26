let imageSources = [];
let actualImage; 

const lightboxWrapper = document.getElementById("lightbox-wrapper");
const lightboxBodyCover = document.getElementById("lightbox-body-cover");
const imageCounter = document.getElementById('image-counter');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxPrevButton = document.getElementById('lightbox-prev-button');
const lightboxNextButton = document.getElementById('lightbox-next-button');
const lightboxCloseButton = document.getElementById('lightbox-close-button');

let lightboxImaes = Array.from(document.getElementsByClassName("lightbox"));

for (let image of lightboxImaes) {
    imageSources.push(image.src);
    image.addEventListener('click', openLightbox);
}

lightboxBodyCover.addEventListener('click', hideLightboxWrapper);
lightboxPrevButton.addEventListener('click', setPrevImage);
lightboxNextButton.addEventListener('click', setNextImage);
lightboxCloseButton.addEventListener('click', hideLightboxWrapper);

window.addEventListener('keyup', keyPressed);

function keyPressed(event) {
    // left arrow: 37
    // right arrow: 39
    
    if (event.keyCode == 39) {
        setNextImage();
    } else if (event.keyCode == 37) {
        setPrevImage();
    }
}

function openLightbox(e) {
    actualImage = e.target.src;
    setLightboxImage(actualImage);
    updateImageCounter();
    showLightboxWrapper();
}

function setPrevImage() {
    if (imageSources.indexOf(actualImage) > 0) {
        actualImage = imageSources[imageSources.indexOf(actualImage) - 1];
        setLightboxImage(actualImage);
        updateImageCounter();
    }
}

function setNextImage() {
    if (imageSources.indexOf(actualImage) < imageSources.length - 1) {
        actualImage = imageSources[imageSources.indexOf(actualImage) + 1]
        setLightboxImage(actualImage);
        updateImageCounter();
    }
}

function setLightboxImage(image) {
    lightboxImage.innerHTML = `<img src=${image}>`
}

function updateImageCounter() {
    let number = imageSources.indexOf(actualImage) + 1;
    imageCounter.innerHTML = `${number} / ${imageSources.length}`;
}

function showLightboxWrapper() {
    lightboxWrapper.style.display = "block";
}

function hideLightboxWrapper() {
    lightboxWrapper.style.display = "none";
}
