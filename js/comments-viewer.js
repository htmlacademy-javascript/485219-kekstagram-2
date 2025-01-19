import {addComment} from './comments-renderer.js';

const socialCommentsElement = document.querySelector('.social__comments');
const bigPictureElement = document.querySelector('.big-picture');
const loadCommentElement = bigPictureElement.querySelector('.social__comment-count');
const currentCommentsCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const totalCommentsCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const loadCommentsButtonElement = bigPictureElement.querySelector('.social__comments-loader');
const LOADING_STEP = 5;
let commentsArray = [];
let totalComments;
let currentCommentsLoaded = 0;

function fillCommentsList(comments) {
  socialCommentsElement.innerHTML = '';

  if (comments.length > 0) {
    commentsArray = comments;
    currentCommentsLoaded = 0;
    totalComments = comments.length;

    const commentsToLoad = Math.min(LOADING_STEP, totalComments);
    for (let i = 0; i < commentsToLoad; i++) {
      addCommentAndUpdateCounter(commentsArray[i]);
    }
    loadCommentsButtonElement.classList.toggle('hidden', currentCommentsLoaded >= totalComments);
  } else {
    loadCommentElement.innerHTML = '';
    loadCommentElement.textContent = 'Нет комментариев';
    loadCommentsButtonElement.classList.toggle('hidden', currentCommentsLoaded >= totalComments);
  }
}

function loadMoreComments() {
  const commentsToLoad = Math.min(LOADING_STEP, totalComments - currentCommentsLoaded);

  for (let i = 0; i < commentsToLoad; i++) {
    addCommentAndUpdateCounter(commentsArray[currentCommentsLoaded]);
  }
  loadCommentsButtonElement.classList.toggle('hidden', currentCommentsLoaded >= totalComments);
}

function addCommentAndUpdateCounter(comment) {
  addComment(comment, socialCommentsElement);

  currentCommentsLoaded++;
  currentCommentsCountElement.textContent = currentCommentsLoaded;
  totalCommentsCountElement.textContent = totalComments;
}

export {fillCommentsList, loadMoreComments};
