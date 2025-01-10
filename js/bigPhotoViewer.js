import {photoData} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const body = document.body;

picturesContainer.addEventListener('click', (evt) => {
  const targetPhotoId = evt.target.closest('.picture');

  const targetPhoto = photoData.find((picture) => picture.photoId === Number(targetPhotoId.dataset.photoId));

  bigPicture.querySelector('img').src = targetPhoto.url;
  bigPicture.querySelector('.likes-count').textContent = targetPhoto.likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = targetPhoto.comments.length;

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
});

bigPicture.addEventListener('click', (evt) => {
  if(evt.target.closest('.big-picture__cancel')) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

function createCommentTemplate() {

}
