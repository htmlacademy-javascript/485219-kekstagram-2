const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function showThumbnail(photoData) {
  const fragment = document.createDocumentFragment();

  photoData.forEach(({id ,url, description, likes, comments }) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);
    const pictureImgElement = pictureElement.querySelector('.picture__img');

    pictureElement.setAttribute('data-id', id);
    pictureImgElement.setAttribute('src', url);
    pictureImgElement.setAttribute('alt', description);
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

export {showThumbnail};
