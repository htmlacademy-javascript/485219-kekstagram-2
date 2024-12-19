const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function showThumbnail(randomPhotoObjects) {
  const fragment = document.createDocumentFragment();

  randomPhotoObjects.forEach((object) => {
    const newThumbnail = thumbnailTemplate.cloneNode(true);

    newThumbnail.querySelector('img').src = object.url;
    newThumbnail.querySelector('img').alt = object.description;
    newThumbnail.querySelector('.picture__comments').textContent = object.comments.length;
    newThumbnail.querySelector('.picture__likes').textContent = object.likes;

    fragment.appendChild(newThumbnail);
  });

  picturesContainer.appendChild(fragment);
}

export {showThumbnail};
