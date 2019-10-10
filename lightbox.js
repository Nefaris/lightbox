const lightboxWrapper = document.getElementById("lightbox-wrapper");
const lightboxBodyCover = document.getElementById("lightbox-body-cover");
const imageCounter = document.getElementById('image-counter');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxPrevButton = document.getElementById('lightbox-prev-button');
const lightboxNextButton = document.getElementById('lightbox-next-button');
const lightboxCloseButton = document.getElementById('lightbox-close-button');

lightboxBodyCover.addEventListener('click', hideLightboxWrapper);
lightboxPrevButton.addEventListener('click', setPrevImage);
lightboxNextButton.addEventListener('click', setNextImage);
lightboxCloseButton.addEventListener('click', hideLightboxWrapper);

window.addEventListener('keyup', keyPressed);

function keyPressed(event) {
    if (event.keyCode === 39) {
        setNextImage();
    } else if (event.keyCode === 37) {
        setPrevImage();
    }
}

function openLightbox(image) {
    setLightboxImage(image.src);
    showLightboxWrapper();
}

function setLightboxImage(image) {
    lightboxImage.innerHTML = `<img src=${image}>`
}

let actualCat;
let actualPhotoIndex = 0;

function setPrevImage() {
    if (actualPhotoIndex > 0) {
        actualPhotoIndex--;
        setLightboxImage(lightboxImages.get(actualCat)[actualPhotoIndex].src);
        setCounter(actualPhotoIndex + 1, lightboxImages.get(actualCat).length);
    }
}

function setNextImage() {
    if (actualPhotoIndex < lightboxImages.get(actualCat).length - 1) {
        actualPhotoIndex++;
        setLightboxImage(lightboxImages.get(actualCat)[actualPhotoIndex].src);
        setCounter(actualPhotoIndex + 1, lightboxImages.get(actualCat).length);
    }
}

function setCounter(actual, max) {
    imageCounter.innerHTML = `${actual} / ${max}`;
}

function showLightboxWrapper() {
    lightboxWrapper.style.display = "block";
}

function hideLightboxWrapper() {
    lightboxWrapper.style.display = "none";
}

const images = document.querySelectorAll('.lightbox');

let lightboxImages = new Map();

for (const image of images) {
    if (lightboxImages.has(image.dataset.lightbox)) {
        lightboxImages.get(image.dataset.lightbox).push(image);
    } else {
        lightboxImages.set(image.dataset.lightbox, [image]);
    }
}

lightboxImages.forEach((v, k) => {
    for (const image of v) {
        image.addEventListener('click', () => {
            actualPhotoIndex = v.indexOf(image);
            actualCat = k;
            setCounter(actualPhotoIndex + 1, v.length);
            openLightbox(image);
        });
    }
});

