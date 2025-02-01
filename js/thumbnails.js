import {getRandomUniqueArrayElements} from './util.js';

const buttonsFormElement = document.querySelector('.img-filters');
const filterDefaultButtonElement = buttonsFormElement.querySelector('#filter-default');
const filterRandomButtonElement = buttonsFormElement.querySelector('#filter-random');
const filterDiscussedButtonElement = buttonsFormElement.querySelector('#filter-discussed');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
let photoData = [];

function fillPhotoElement(pictureElement, id, pictureImgElement, url, description, comments, likes) {
  pictureElement.setAttribute('data-id', id);
  pictureImgElement.setAttribute('src', url);
  pictureImgElement.setAttribute('alt', description);
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
}

function renderSequentially() {
  clearPicturesContainer();

  const fragment = document.createDocumentFragment();

  photoData.forEach(({id, url, description, likes, comments}) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);
    const pictureImgElement = pictureElement.querySelector('.picture__img');

    fillPhotoElement(pictureElement, id, pictureImgElement, url, description, comments, likes);

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

function renderRandom() {
  clearPicturesContainer();

  const randomPhotoData = getRandomUniqueArrayElements(photoData, 10);
  const fragment = document.createDocumentFragment();

  randomPhotoData.forEach(({id, url, description, likes, comments}) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);
    const pictureImgElement = pictureElement.querySelector('.picture__img');

    fillPhotoElement(pictureElement, id, pictureImgElement, url, description, comments, likes);

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

function renderDiscussed() {
  clearPicturesContainer();

  const sortedPhotoData = [...photoData].sort((a, b) => b.comments.length - a.comments.length);
  const fragment = document.createDocumentFragment();

  sortedPhotoData.forEach(({id, url, description, likes, comments}) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);
    const pictureImgElement = pictureElement.querySelector('.picture__img');

    fillPhotoElement(pictureElement, id, pictureImgElement, url, description, comments, likes);

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

function clearPicturesContainer() {
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
}

function showThumbnail(data) {
  photoData = data;
  renderSequentially();
  buttonsFormElement.classList.remove('img-filters--inactive');
}

function setActiveFilterButton(activeButton) {
  const buttons = buttonsFormElement.querySelectorAll('.img-filters__button');

  buttons.forEach((button) => button.classList.remove('img-filters__button--active'));
  activeButton.classList.add('img-filters__button--active');
}

function debounce(callback, delay = 500) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
}

const debouncedRenderSequentially = debounce(renderSequentially);
const debouncedRenderRandom = debounce(renderRandom);
const debouncedRenderDiscussed = debounce(renderDiscussed);

filterDefaultButtonElement.addEventListener('click', (evt) => {
  setActiveFilterButton(evt.target);
  debouncedRenderSequentially();
});

filterRandomButtonElement.addEventListener('click', (evt) => {
  setActiveFilterButton(evt.target);
  debouncedRenderRandom();
});

filterDiscussedButtonElement.addEventListener('click', (evt) => {
  setActiveFilterButton(evt.target);
  debouncedRenderDiscussed();
});

export {showThumbnail};
