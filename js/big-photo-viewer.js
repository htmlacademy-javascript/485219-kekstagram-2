import { fillCommentsList, loadMoreComments } from './comments-viewer.js';

const picturesContainerElement = document.querySelector('.pictures');
const bigPhotoElement = document.querySelector('.big-picture');
const loadMoreCommentsElement = document.querySelector('.comments-loader');
const bodyElement = document.body;
let photoData = [];

const closeBigPhoto = () => {
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const onEscapePress = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPhoto();
  }
};

picturesContainerElement.addEventListener('click', (evt) => {
  const targetPhotoId = evt.target.closest('.picture');
  if (!targetPhotoId) {
    return;
  }

  const targetPhoto = photoData.find((photo) => photo.id === Number(targetPhotoId.dataset.id));
  if (!targetPhoto) {
    return;
  }

  const { url, description, likes } = targetPhoto;

  bigPhotoElement.querySelector('.big-picture__img img').setAttribute('src', url);
  bigPhotoElement.querySelector('.likes-count').textContent = likes;
  bigPhotoElement.querySelector('.social__caption').textContent = description;

  bigPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  fillCommentsList(targetPhoto.comments);

  document.addEventListener('keydown', onEscapePress);
});

bigPhotoElement.addEventListener('click', (evt) => {
  if (evt.target.closest('.big-picture__cancel') || evt.target === bigPhotoElement) {
    closeBigPhoto();
  }
});

bigPhotoElement.addEventListener('keydown', onEscapePress);

loadMoreCommentsElement.addEventListener('click', loadMoreComments);

const setPhotoData = (data) => {
  photoData = data;
};

export { setPhotoData };


