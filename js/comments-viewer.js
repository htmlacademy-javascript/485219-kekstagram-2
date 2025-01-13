const socialCommentsElement = document.querySelector('.social__comments');
const commentTemplateElement = socialCommentsElement.querySelector('.social__comment');

function fillCommentsList(comments) {
  socialCommentsElement.innerHTML = '';
  comments.forEach((comment) => {
    const newCommentElement = commentTemplateElement.cloneNode(true);
    const commentPictureElement = newCommentElement.querySelector('.social__picture');

    commentPictureElement.setAttribute('src', comment.avatar);
    commentPictureElement.setAttribute('alt', comment.name);
    newCommentElement.querySelector('.social__text').textContent = comment.commentsList;
    socialCommentsElement.appendChild(newCommentElement);
  });
}

export {fillCommentsList};
