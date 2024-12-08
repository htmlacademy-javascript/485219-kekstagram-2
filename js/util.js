function getUniqueValue(getRandomInt, min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function getRandomArrayElements(array, getRandomInt, maxLength = 1) {
  const elements = [];
  for (let i = 0; i < maxLength; i++) {
    elements.push(array[getRandomInt(0, array.length)]);
  }

  return elements.join(' ');
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPhotoObjects({ photoGeneratorParameters }) {
  const {
    paramCount,
    paramDescriptions,
    paramRandomValue,
    paramObjectsCount,
    paramCommentsCount,
    paramAvatarsCount,
    paramSentencesCount,
    paramLikesCount,
    paramMessages,
    paramNames
  } = photoGeneratorParameters;

  const objects = [];
  const getUniqueCommentIdValue = getUniqueValue(getRandomInteger, paramRandomValue.MIN, paramRandomValue.MAX);
  const getUniquePhotoIdValue = getUniqueValue(getRandomInteger, paramObjectsCount.MIN, paramObjectsCount.MAX);
  const getUniqueUrlValue = getUniqueValue(getRandomInteger, paramObjectsCount.MIN, paramObjectsCount.MAX);


  for (let i = 0; i < paramCount; i++) {
    const comments = [];
    const commentsCount = getRandomInteger(paramCommentsCount.MIN, paramCommentsCount.MAX);

    for (let j = 0; j < commentsCount; j++) {
      const commentId = getUniqueCommentIdValue();
      const avatar = `img/avatar-${getRandomInteger(paramAvatarsCount.MIN, paramAvatarsCount.MAX)}.svg`;
      const commentsList = getRandomArrayElements(paramMessages, getRandomInteger, paramSentencesCount.MAX);
      const name = getRandomArrayElements(paramNames, getRandomInteger);

      comments.push({
        commentId,
        avatar,
        commentsList,
        name
      });
    }

    const photoId = getUniquePhotoIdValue();
    const url = `photos/${getUniqueUrlValue()}.jpg`;
    const description = paramDescriptions[getRandomInteger(0, paramDescriptions.length)];
    const likes = getRandomInteger(paramLikesCount.MIN, paramLikesCount.MAX);

    objects.push({
      photoId,
      url,
      description,
      likes,
      comments
    });
  }

  return objects;
}

export {getUniqueValue, getRandomArrayElements, getRandomInteger, getRandomPhotoObjects};
