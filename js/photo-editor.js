const Scale = {
  DEFAULT: 1,
  STEP: 0.25,
  MAX: 1
};

console.log("initialize11111");

const formElement = document.querySelector('.img-upload__form');
const uploadInputElement = formElement.querySelector('#upload-file');
const editPhotoFormElement = formElement.querySelector('.img-upload__overlay');
const closeButtonElement = formElement.querySelector('.img-upload__cancel');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const smallerButtonElement = formElement.querySelector('.scale__control--smaller');
const biggerButtonElement = formElement.querySelector('.scale__control--bigger');
const scaleValueElement = formElement.querySelector('.scale__control--value');
const imageElement = formElement.querySelector('.img-upload__preview img');
const bodyElement = document.body;

let currentScale = Scale.DEFAULT;

setImageScale(Scale.DEFAULT);

uploadInputElement.addEventListener('change', () => {
  editPhotoFormElement.classList.remove('hidden');
  editPhotoFormElement.setAttribute('tabindex', 0);
  editPhotoFormElement.focus();

  bodyElement.classList.add('modal-open');
});

closeButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

editPhotoFormElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

hashtagInputElement.addEventListener('keydown', (evt) => {
  preventCloseOnEsc(evt);
});

commentInputElement.addEventListener('keydown', (evt) => {
  preventCloseOnEsc(evt);
});

smallerButtonElement.addEventListener('click', () => {
  if (currentScale > Scale.STEP) {
    currentScale -= Scale.STEP;
    setImageScale(currentScale);
    updateScaleValue(currentScale);
  }
});

biggerButtonElement.addEventListener('click', () => {
  if (currentScale < Scale.MAX) {
    currentScale += Scale.STEP;
    setImageScale(currentScale);
    updateScaleValue(currentScale);
  }
});

function preventCloseOnEsc(evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}

function closeModal() {
  editPhotoFormElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  formElement.reset();
}

function setImageScale(newValue) {
  imageElement.style.setProperty('scale', newValue);
}

function updateScaleValue(newValue) {
  scaleValueElement.setAttribute('value', newValue);
}
