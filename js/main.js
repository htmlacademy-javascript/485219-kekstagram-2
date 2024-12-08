import {
  OBJECTS_COUNT, COMMENTS_COUNT, AVATARS_COUNT, SENTENCES_COUNT, LIKES_COUNT, RANDOM_VALUE,
  PHOTO_DESCRIPTIONS, MESSAGES, NAMES
} from './data.js';

import {getRandomPhotoObjects} from './util.js';

const parameters = {
  paramCount: OBJECTS_COUNT.MAX,
  paramDescriptions: PHOTO_DESCRIPTIONS,
  paramRandomValue: RANDOM_VALUE,
  paramObjectsCount: OBJECTS_COUNT,
  paramCommentsCount: COMMENTS_COUNT,
  paramAvatarsCount: AVATARS_COUNT,
  paramSentencesCount: SENTENCES_COUNT,
  paramLikesCount: LIKES_COUNT,
  paramMessages: MESSAGES,
  paramNames: NAMES
};

const generatedObjects = getRandomPhotoObjects({photoGeneratorParameters: parameters});
console.log(generatedObjects);


