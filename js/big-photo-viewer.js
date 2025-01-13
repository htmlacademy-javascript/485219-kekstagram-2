import {fillCommentsList} from './comments-viewer.js';

const picturesContainerElement = document.querySelector('.pictures');
const bigPhotoElement = document.querySelector('.big-picture');

const bodyElement = document.body;
let photoData = [];

picturesContainerElement.addEventListener('click', (evt) => {
  const targetPhotoId = evt.target.closest('.picture');
  const targetPhoto = photoData.find((photo) => photo.photoId === Number(targetPhotoId.dataset.photoId));
  const {url, description, likes, comments} = targetPhoto;

  bigPhotoElement.querySelector('.social__comment-count').classList.add('hidden');
  bigPhotoElement.querySelector('.comments-loader').classList.add('hidden');

  bigPhotoElement.querySelector('.big-picture__img img').setAttribute('src', url);
  bigPhotoElement.querySelector('.likes-count').textContent = likes;
  bigPhotoElement.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPhotoElement.querySelector('.social__caption').textContent = description;

  bigPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  fillCommentsList(targetPhoto.comments);

  bigPhotoElement.querySelector('.social__comment-shown-count').textContent = comments.length;

  bigPhotoElement.setAttribute('tabindex', '0');
  bigPhotoElement.focus();
});

bigPhotoElement.addEventListener('click', (evt) => {
  if(evt.target.closest('.big-picture__cancel')) {
    closeBigPhoto();
  }
});

bigPhotoElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPhoto();
  }
});

function closeBigPhoto() {
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
}

function setPhotoData(data) {
  photoData = data;
}

export {setPhotoData};


