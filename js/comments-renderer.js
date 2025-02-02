const commentTemplateElement = document.querySelector('.social__comment');

const addComment = ({ avatar, name, message }, socialCommentsElement) => {
  const newCommentElement = commentTemplateElement.cloneNode(true);
  const commentPictureElement = newCommentElement.querySelector('.social__picture');

  commentPictureElement.setAttribute('src', avatar);
  commentPictureElement.setAttribute('alt', name);
  newCommentElement.querySelector('.social__text').textContent = message;
  socialCommentsElement.appendChild(newCommentElement);
};

export { addComment };
