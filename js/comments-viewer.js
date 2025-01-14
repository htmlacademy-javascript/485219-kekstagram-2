const socialCommentsElement = document.querySelector('.social__comments');
const commentTemplateElement = socialCommentsElement.querySelector('.social__comment');

function fillCommentsList(comments) {
  socialCommentsElement.innerHTML = '';
  comments.forEach((comment) => {
    const {avatar, name, commentsList} = comment;
    const newCommentElement = commentTemplateElement.cloneNode(true);
    const commentPictureElement = newCommentElement.querySelector('.social__picture');

    commentPictureElement.setAttribute('src', avatar);
    commentPictureElement.setAttribute('alt', name);
    newCommentElement.querySelector('.social__text').textContent = commentsList;
    socialCommentsElement.appendChild(newCommentElement);
  });
}

export {fillCommentsList};
