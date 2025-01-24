const HASHTAG_MAX_COUNT = 5;

function validateHashtag(value) {
  if (!value.trim()) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

  if (hashtags.length > HASHTAG_MAX_COUNT) {
    return false;
  }

  hashtags.forEach((hashtag) => {
    if (!hashtagPattern.test(hashtag)) {
      return false;
    }
  });

  const lowerCaseHashtags = hashtags.map((tag) => tag.toLowerCase());
  const uniqueHashtags = new Set(lowerCaseHashtags);
  if (uniqueHashtags.size !== hashtags.length) {
    return false;
  }

  return true;
}

export {validateHashtag};
