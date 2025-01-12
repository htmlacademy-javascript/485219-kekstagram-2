import {photoData} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const bigPhoto = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const commentTemplate = socialComments.querySelector('.social__comment');
const body = document.body;

socialComments.innerHTML = '';

picturesContainer.addEventListener('click', (evt) => {
  const targetPhotoId = evt.target.closest('.picture');
  const targetPhoto = photoData.find((photo) => photo.photoId === Number(targetPhotoId.dataset.photoId));

  bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
  bigPhoto.querySelector('.comments-loader').classList.add('hidden');

  bigPhoto.querySelector('img').src = targetPhoto.url;
  bigPhoto.querySelector('.likes-count').textContent = targetPhoto.likes;
  bigPhoto.querySelector('.social__comment-total-count').textContent = targetPhoto.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = targetPhoto.description;

  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  targetPhoto.comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.commentsList;
    newComment.querySelector('.social__picture').alt = comment.name;
    socialComments.appendChild(newComment);
  });

  bigPhoto.querySelector('.social__comment-shown-count').textContent = targetPhoto.comments.length;

  bigPhoto.setAttribute('tabindex', '0');
  bigPhoto.focus();
});

bigPhoto.addEventListener('click', (evt) => {
  if(evt.target.closest('.big-picture__cancel')) {
    closeBigPhoto();
  }
});

bigPhoto.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPhoto();
  }
});

function closeBigPhoto() {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
}


