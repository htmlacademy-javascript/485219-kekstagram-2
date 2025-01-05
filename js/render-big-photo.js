const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
let picturesArray = [];

// const picturesArray = (() => {
//   console.log(picturesContainer);
//   const result = Array.from(picturesContainer.querySelectorAll('.picture'));
//   console.log('RESULT: ' + result);
//   return result;
// })();

window.addEventListener('load', (evt) => {
  console.log(picturesContainer);
  picturesArray = Array.from(picturesContainer.querySelectorAll('.picture'));
  console.log('RESULT: ' + picturesArray);
  return result;
});

// picturesContainer.addEventListener('click', (evt) => {
//   const targetPhotoId = evt.target.closest('.picture');
//   // const picturesArray = Array.from(picturesContainer.querySelectorAll('.picture'));
//   console.log(picturesArray);
//   const targetPhoto = picturesArray.find(picture => picture.dataset.photoId === targetPhotoId.dataset.photoId)


//   bigPicture.querySelector('img').src = targetPhoto.querySelector('img').src;

//   bigPicture.classList.remove('hidden');
// });
