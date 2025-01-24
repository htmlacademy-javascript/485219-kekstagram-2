const COMMENT_LENGTH = 140;

function validateComment(value) {
  if (!value.trim()) {
    return false;
  }

  if (value.length > COMMENT_LENGTH) {
    return false;
  }

  return true;
}

export {validateComment};
