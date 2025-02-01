import {sendData} from './api.js';
import {showSuccess, showUploadError} from './notifications.js';

const bodyElement = document.body;
const bigPhotoElement = document.querySelector('.big-picture');
const formElement = document.querySelector('.img-upload__form');
const publishButtonElement = formElement.querySelector('.img-upload__submit');

formElement.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  publishButtonElement.setAttribute('disabled', 'true');

  const formData = new FormData(formElement);
  try {
    await sendData(formData);
    showSuccess();
    formElement.reset();
    bigPhotoElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  } catch (error) {
    showUploadError();
  }

  publishButtonElement.removeAttribute('disabled');
});
