import {resetSlider} from './effects-slider.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const Scale = {
  DEFAULT: 1,
  STEP: 0.25,
  MAX: 1
};

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
const photoChooserElement = formElement.querySelector('.img-upload__start input[type=file]');
const effectsPreviewElements = document.querySelectorAll('.effects__preview');

const bodyElement = document.body;

let currentScale = Scale.DEFAULT;

setImageScale(Scale.DEFAULT);

uploadInputElement.addEventListener('change', () => {
  editPhotoFormElement.classList.remove('hidden');
  editPhotoFormElement.setAttribute('tabindex', 0);
  editPhotoFormElement.focus();

  resetScaleElement();
  bodyElement.classList.add('modal-open');
});

closeButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetSlider();
  closeModal();
});

editPhotoFormElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    resetSlider();
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

photoChooserElement.addEventListener('change', () => {
  const file = photoChooserElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageElement.setAttribute('src', URL.createObjectURL(file));
    effectsPreviewElements.forEach((preview) => {
      preview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  }
});

function preventCloseOnEsc(evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}

function resetScaleElement() {
  scaleValueElement.setAttribute('value', `${Scale.DEFAULT * 100}%`);
  currentScale = Scale.DEFAULT;
}

function closeModal() {
  editPhotoFormElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadInputElement.setAttribute('value', '');
  formElement.reset();
}

function setImageScale(newValue) {
  imageElement.setAttribute('style', `transform: scale(${newValue})`);
}

function updateScaleValue(newValue) {
  scaleValueElement.setAttribute('value', `${newValue * 100}%`);
}

export {resetScaleElement};
