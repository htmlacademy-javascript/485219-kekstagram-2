import {fillCommentsList, loadMoreComments} from './comments-viewer.js';

const picturesContainerElement = document.querySelector('.pictures');
const bigPhotoElement = document.querySelector('.big-picture');
const looadMoreCommentsElement = document.querySelector('.comments-loader');

const bodyElement = document.body;
let photoData = [];

picturesContainerElement.addEventListener('click', (evt) => {
  const targetPhotoId = evt.target.closest('.picture');
  if(!targetPhotoId) {
    return;
  }

  const targetPhoto = photoData.find((photo) => photo.photoId === Number(targetPhotoId.dataset.photoId));
  const {url, description, likes} = targetPhoto;

  bigPhotoElement.querySelector('.big-picture__img img').setAttribute('src', url);
  bigPhotoElement.querySelector('.likes-count').textContent = likes;
  bigPhotoElement.querySelector('.social__caption').textContent = description;

  bigPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  fillCommentsList(targetPhoto.comments);

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

looadMoreCommentsElement.addEventListener('click', () => {
  loadMoreComments();
});

function closeBigPhoto() {
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
}

function setPhotoData(data) {
  photoData = data;
}

export {setPhotoData};


