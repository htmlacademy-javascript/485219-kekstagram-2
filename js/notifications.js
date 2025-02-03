import {editPhotoFormElement, closeModal} from './photo-editor.js';

const ERROR_DISPLAY_TIME = 4000;

const bodyElement = document.body;
const fragmentElement = document.createDocumentFragment();
const templateDataErrorElement = document.querySelector('#data-error').content.querySelector('.data-error');
const dataErrorElement = templateDataErrorElement.cloneNode(true);

const templateErrorMessageElement = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = templateErrorMessageElement.cloneNode(true);
const errorButtonElement = errorMessageElement.querySelector('.error__button');
const errorBlockElement = errorMessageElement.querySelector('.error__inner');

const templateSuccessElement = bodyElement.querySelector('#success').content.querySelector('.success');
const successElement = templateSuccessElement.cloneNode(true);
const successButtonElement = successElement.querySelector('.success__button');
const successBlockElement = successElement.querySelector('.success__inner');

const showOtherUsersDataError = () => {
  bodyElement.append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ERROR_DISPLAY_TIME);
};

const closeMessageBox = (element, onEscClick, onOverlayClick) => {
  element.remove();
  document.removeEventListener('keydown', onEscClick);
  document.removeEventListener('click', onOverlayClick);
};

const onEscCloseMessage = (evt, element, onEscClick, onOverlayClick) => {
  if (evt.key === 'Escape') {
    closeMessageBox(element, onEscClick, onOverlayClick);
    editPhotoFormElement.focus();
  }
};

const onOverlayCloseMessage = (evt, messageBlock, element, onEscClick, onOverlayClick) => {
  if (!messageBlock.contains(evt.target)) {
    closeMessageBox(element, onEscClick, onOverlayClick);
    editPhotoFormElement.focus();
  }
};

const onClickCloseMessage = (element, onEscClick, onOverlayClick) => {
  closeMessageBox(element, onEscClick, onOverlayClick);
  editPhotoFormElement.focus();
  closeModal();
};


const showSuccess = () => {
  fragmentElement.appendChild(successElement);
  bodyElement.append(fragmentElement);

  function onEscClick(evt) {
    onEscCloseMessage(evt, successElement, onEscClick, onOverlayClick);
    closeModal();
  }

  function onOverlayClick(evt) {
    if (!successBlockElement.contains(evt.target)) {
      closeMessageBox(successElement, onEscClick, onOverlayClick);
      closeModal();
    }
  }

  successButtonElement.addEventListener('click', () => onClickCloseMessage(successElement, onEscClick, onOverlayClick));

  successElement.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscClick);
};

const showUploadError = () => {
  fragmentElement.appendChild(errorMessageElement);
  bodyElement.append(fragmentElement);

  function onEscClick(evt) {
    onEscCloseMessage(evt, errorMessageElement, onEscClick, onOverlayClick);
  }

  function onOverlayClick(evt) {
    onOverlayCloseMessage(evt, errorBlockElement, errorMessageElement, onEscClick, onOverlayClick);
  }

  errorButtonElement.addEventListener('click', () => onClickCloseMessage(errorMessageElement, onEscClick, onOverlayClick));
  document.addEventListener('keydown', onEscClick);
  document.addEventListener('click', onOverlayClick);
};

export {showOtherUsersDataError, showSuccess, showUploadError};
