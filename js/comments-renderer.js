const commentTemplateElement = document.querySelector('.social__comment');

function addComment({avatar, name, commentsList}, socialCommentsElement) {
  const newCommentElement = commentTemplateElement.cloneNode(true);
  const commentPictureElement = newCommentElement.querySelector('.social__picture');

  commentPictureElement.setAttribute('src', avatar);
  commentPictureElement.setAttribute('alt', name);
  newCommentElement.querySelector('.social__text').textContent = commentsList;
  socialCommentsElement.appendChild(newCommentElement);
}

export {addComment};
