const ERROR_DISPLAY_TIME = 5000;

const bodyElement = document.body;
const templateDataErrorElement = document.querySelector('#data-error').content.querySelector('.data-error');
const dataErrorElement = templateDataErrorElement.cloneNode(true);


function showDataError() {
  bodyElement.append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ERROR_DISPLAY_TIME);
}

export {showDataError};
