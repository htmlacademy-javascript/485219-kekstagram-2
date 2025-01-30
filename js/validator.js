import {errorMessage, validateHashtag} from './hashtag-field-validator.js';
import {validateComment} from './comment-field-validator.js';

const formElement = document.querySelector('.img-upload__form');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const publishButtonElement = formElement.querySelector('.img-upload__submit');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text-error'
});

pristine.addValidator(hashtagInputElement, validateHashtag, () => errorMessage);
pristine.addValidator(commentInputElement, validateComment, 'превышено количество символов');
hashtagInputElement.addEventListener('input', () => {
  toggleSubmitButton();
});

commentInputElement.addEventListener('input', () => {
  toggleSubmitButton();
});

function blockSubmitButton() {
  publishButtonElement.setAttribute('disabled', 'true');
}

function unblockSubmitButton() {
  publishButtonElement.removeAttribute('disabled');
}

function toggleSubmitButton() {
  if (!pristine.validate()) {
    blockSubmitButton();
  } else {
    unblockSubmitButton();
  }
}
