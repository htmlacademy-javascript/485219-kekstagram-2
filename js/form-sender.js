import {sendData} from './api.js';
import {showSuccess, showUploadError} from './notifications.js';

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
  } catch (error) {
    showUploadError();
  }

  publishButtonElement.removeAttribute('disabled');
});
