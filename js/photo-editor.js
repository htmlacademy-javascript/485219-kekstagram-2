import {validateHashtag, error} from './hashtag-field-validator.js';
import {validateComment} from './comment-field-validator.js';

const formElement = document.querySelector('.img-upload__form');
const uploadInputElement = formElement.querySelector('#upload-file');
const editPhotoFormElement = formElement.querySelector('.img-upload__overlay');
const closeButtonElement = formElement.querySelector('.img-upload__cancel');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const publishButtonElement = formElement.querySelector('.img-upload__submit');
const smallerButtonElement = formElement.querySelector('.scale__control--smaller');
const biggerButtonElement = formElement.querySelector('.scale__control--bigger');
const scaleValueElement = formElement.querySelector('.scale__control--value');

const bodyElement = document.body;

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text-error'
});

pristine.addValidator(hashtagInputElement, validateHashtag, error);
pristine.addValidator(commentInputElement, validateComment, 'превышено количество символов');

hashtagInputElement.addEventListener('input', () => {
  toggleSubmitButton();
});

commentInputElement.addEventListener('input', () => {
  toggleSubmitButton();
});

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

function toggleSubmitButton() {
  publishButtonElement.disabled = !pristine.validate();
}
