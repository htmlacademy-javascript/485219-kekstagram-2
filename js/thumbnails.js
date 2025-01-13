const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function showThumbnail(photoData) {
  const fragment = document.createDocumentFragment();

  photoData.forEach(({photoId ,url, description, likes, comments }) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);

    pictureElement.dataset.photoId = photoId;
    pictureElement.querySelector('img').setAttribute('src', url);
    pictureElement.querySelector('img').setAttribute('alt', description);
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

export {showThumbnail};
