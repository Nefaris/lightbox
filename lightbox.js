window.onload = function () {
  let borderSize = '.75em';
  let bodyCover = 'rgba(0, 0, 0, .65)';

  let lighBoxContainer = document.createElement('div');
  lighBoxContainer.id = 'lighBoxContainer';
  lighBoxContainer.style.display = 'none';
  lighBoxContainer.style.justifyContent = 'center';
  lighBoxContainer.style.alignItems = 'center';
  lighBoxContainer.style.backgroundColor = '#fff';
  lighBoxContainer.style.padding = borderSize;
  lighBoxContainer.style.position = 'absolute';
  lighBoxContainer.style.left = '50%';
  lighBoxContainer.style.top = '50%';
  lighBoxContainer.style.transform = 'translate(-50%, -50%)';
  lighBoxContainer.style.zIndex = '999';
  document.getElementsByTagName('body')[0].appendChild(lighBoxContainer);

  let lighBoxBodyCover = document.createElement('div');
  lighBoxBodyCover.id = 'lighBoxBodyCover';
  lighBoxBodyCover.style.display = 'none';
  lighBoxBodyCover.style.width = '100%';
  lighBoxBodyCover.style.height = '100%';
  lighBoxBodyCover.style.backgroundColor = bodyCover;
  lighBoxBodyCover.style.position = 'fixed';
  lighBoxBodyCover.style.zIndex = '998';
  document.getElementsByTagName('body')[0].appendChild(lighBoxBodyCover);

  images = document.getElementsByClassName('lightbox');

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', imgClicked);
  }

  function imgClicked(e) {
    document.getElementById('lighBoxBodyCover').style.display = 'flex';
    document.getElementById('lighBoxContainer').style.display = 'block';
    document.getElementById('lighBoxContainer').innerHTML = `<img style='width: ${e.target.width * 2}px; height: ${e.target.height * 2}px' src='${e.target.src}'>`;
    lighBoxShowed = true;
  }

  document.getElementById('lighBoxBodyCover').addEventListener('click', () => {
     document.getElementById('lighBoxContainer').style.display = 'none';
     document.getElementById('lighBoxBodyCover').style.display = 'none';
  });
}