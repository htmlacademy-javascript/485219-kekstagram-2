const COMMENT_LENGTH = 140;

const validateComment = (value) => !value.trim() || value.length <= COMMENT_LENGTH;

export { validateComment };
