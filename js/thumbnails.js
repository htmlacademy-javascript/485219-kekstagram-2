const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function showThumbnail(randomPhotoObjects) {
  const fragment = document.createDocumentFragment();

  randomPhotoObjects.forEach(({url, description, likes, comments }) => {
    const newThumbnail = pictureTemplateElement.cloneNode(true);

    newThumbnail.querySelector('img').src = url;
    newThumbnail.querySelector('img').alt = description;
    newThumbnail.querySelector('.picture__comments').textContent = comments.length;
    newThumbnail.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(newThumbnail);
  });

  picturesContainer.appendChild(fragment);
}

export {showThumbnail};
