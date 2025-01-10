import {photoData} from './data.js';

const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
// const thumbnailsReadyEvent = new Event('thumbnailsIsReady');

function showThumbnail() {
  const fragment = document.createDocumentFragment();

  photoData.forEach(({photoId ,url, description, likes, comments }) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);

    pictureElement.dataset.photoId = photoId;
    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);

  // picturesContainer.dispatchEvent(thumbnailsReadyEvent);
}

export {showThumbnail};
