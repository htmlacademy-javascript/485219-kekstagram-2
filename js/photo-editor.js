import {validateHashtag} from './hashtag-field-validator.js';
import {validateComment} from './comment-field-validator.js';

const formElement = document.querySelector('.img-upload__form');
const uploadInputElement = formElement.querySelector('#upload-file');
const editPhotoFormElement = formElement.querySelector('.img-upload__overlay');
const closeButtonElement = formElement.querySelector('.img-upload__cancel');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const bodyElement = document.body;

const pristine = new Pristine(formElement);
pristine.addValidator(hashtagInputElement, validateHashtag);
pristine.addValidator(commentInputElement, validateComment);

formElement.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (isValid) {
    formElement.submit();
  } else {
    evt.preventDefault();
  }
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
