const COMMENT_LENGTH = 140;

function validateComment(value) {
  if (!value.trim()) {
    return true;
  }

  return value.length <= COMMENT_LENGTH;
}

export {validateComment};
