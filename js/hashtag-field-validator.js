const HASHTAG_MAX_COUNT = 5;
let errorMessage;

const validateHashtag = (value) => {
  errorMessage = '';
  if (!value.trim()) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

  if (hashtags.length > HASHTAG_MAX_COUNT) {
    errorMessage = 'Нельзя указывать больше 5 хэштегов';
    return false;
  }

  for (const hashtag of hashtags) {
    if (!hashtagPattern.test(hashtag)) {
      errorMessage = 'Хэштег должен начинаться с # и содержать только буквы и цифры, длина 1-19 символов';
      return false;
    }
  }

  const lowerCaseHashtags = hashtags.map((tag) => tag.toLowerCase());
  if (new Set(lowerCaseHashtags).size !== hashtags.length) {
    errorMessage = 'Хэштеги не должны повторяться';
    return false;
  }

  return true;
};

export { validateHashtag, errorMessage };
