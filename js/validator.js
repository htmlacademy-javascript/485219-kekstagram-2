import { errorMessage, validateHashtag } from './hashtag-field-validator.js';
import { validateComment } from './comment-field-validator.js';

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

const blockSubmitButton = () => publishButtonElement.setAttribute('disabled', 'true');

const unblockSubmitButton = () => {
  publishButtonElement.removeAttribute('disabled');
  pristine.reset();
};

const toggleSubmitButton = () => {
  if (!pristine.validate()) {
    blockSubmitButton();
  } else {
    unblockSubmitButton();
  }
};

hashtagInputElement.addEventListener('input', toggleSubmitButton);
commentInputElement.addEventListener('input', toggleSubmitButton);

export { pristine };
