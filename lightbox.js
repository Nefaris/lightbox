let lightboxBodyCover = document.createElement('div');
lightboxBodyCover.id = 'lightboxBodyCover';
lightboxBodyCover.style.position = 'fixed';
lightboxBodyCover.style.top = '0';
lightboxBodyCover.style.left = '0';
lightboxBodyCover.style.width = '100%';
lightboxBodyCover.style.height = '100%';
lightboxBodyCover.style.backgroundColor = 'rgba(0, 0, 0, .9)';
lightboxBodyCover.style.zIndex = '998';
lightboxBodyCover.style.display = 'none';

let lightboxImage = document.createElement('div');
lightboxImage.style.position = 'fixed';
lightboxImage.style.transform = 'translate(-50%, -50%)';
lightboxImage.style.left = '50%';
lightboxImage.style.top = '50%';
lightboxImage.style.backgroundColor = 'rgba(255, 255, 255, 1)';
lightboxImage.style.zIndex = '999';
lightboxImage.style.textAlign = 'center';
lightboxImage.style.display = 'none';

let lightboxImages = document.getElementsByClassName('lightbox');

for (let image of lightboxImages) {
    image.style.cursor = 'pointer';
    image.addEventListener('click', openLightbox);
}

lightboxBodyCover.addEventListener('click', closeLightbox);

function openLightbox(e) {
    setImage(e.target.src);
    showCover();
    showLightboxImage();
}

function closeLightbox() {
    hideCover();
    hideLightBoxImage();
}

function setImage(src) {
    lightboxImage.innerHTML = `<img style="max-width: 99%; transform: scale(1.5)" src=${src}>`;
}

function showLightboxImage() {
    lightboxImage.style.display = 'block';
}

function hideLightBoxImage() {
    lightboxImage.style.display = 'none';
}

function showCover() {
    lightboxBodyCover.style.display = 'block';
}

function hideCover() {
    lightboxBodyCover.style.display = 'none';
}

document.getElementsByTagName('body')[0].appendChild(lightboxBodyCover);
document.getElementsByTagName('body')[0].appendChild(lightboxImage);