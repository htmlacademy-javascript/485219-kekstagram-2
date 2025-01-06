const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
let thumbnailsArray = [];
let photoObjects = [];

// const commentTemplate = (() => {
//   const comment = bigPicture.querySelector('.social__comment').cloneNode();
//   return comment;
// })();

picturesContainer.addEventListener('thumbnailsIsReady', () => {
  thumbnailsArray = Array.from(picturesContainer.querySelectorAll('.picture'));

  console.log(photoObjects);
});

picturesContainer.addEventListener('click', (evt) => {
  const targetPhotoId = evt.target.closest('.picture');
  const targetPhoto = thumbnailsArray.find(picture => picture.dataset.photoId === targetPhotoId.dataset.photoId);
  const commentFragment = document.createDocumentFragment();

  // console.log(picturesArray);

  bigPicture.querySelector('img').src = targetPhoto.querySelector('img').src;
  bigPicture.querySelector('.likes-count').textContent = targetPhoto.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.social__comment-total-count').textContent = targetPhoto.querySelector('.picture__comments').textContent;

  // targetPhoto.

  // bigPicture.querySelector('.social__comments').appendChild(commentFragment);

  bigPicture.classList.remove('hidden');
});

bigPicture.addEventListener('click', (evt) => {
  if(evt.target.closest('.big-picture__cancel')) {
    bigPicture.classList.add('hidden');
  }
});

export {photoObjects};
