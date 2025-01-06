const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const thumbnailsReadyEvent = new Event('thumbnailsIsReady');

function showThumbnail(randomPhotoObjects) {
  const fragment = document.createDocumentFragment();

  randomPhotoObjects.forEach(({photoId ,url, description, likes, comments }) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);

    pictureElement.dataset.photoId = photoId;
    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(pictureElement);
    // console.log(pictureElement);
  });

  picturesContainer.appendChild(fragment);

  picturesContainer.dispatchEvent(thumbnailsReadyEvent);
}

export {showThumbnail};
