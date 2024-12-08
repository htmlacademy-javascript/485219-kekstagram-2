const OBJECTS_COUNT = {
  MIN: 0,
  MAX: 26
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 30
};

const AVATARS_COUNT = {
  MIN: 0,
  MAX: 6
};

const SENTENCES_COUNT = {
  MIN: 0,
  MAX: 4
};

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const RANDOM_VALUE = {
  MIN: 0,
  MAX: Number.MAX_VALUE
};

const photoDescriptions = ['Закат над океаном',
  'Густой лес в тумане', 'Старая каменная башня', 'Поле с подсолнухами', 'Заснеженные горы на рассвете',
  'Уличное кафе в Париже', 'Тихий пляж с белым песком', 'Пейзаж с речкой и мостиком', 'Яркий фейерверк ночью',
  'Городская улица в дождь', 'Цветущий сад весной', 'Корабль в открытом море', 'Тропа в осеннем лесу',
  'Кошка на подоконнике', 'Ночное небо с луной', 'Живописный водопад', 'Рынок со свежими фруктами',
  'Древние руины в пустыне', 'Скала у побережья', 'Группа воздушных шаров в небе', 'Кофе и книги на столе',
  'Пастбище с коровами', 'Детский парк с аттракционами', 'Чайный домик в Японии', 'Маяк на скалистом берегу',
  'Озеро с отражением леса', 'Снежная деревня зимой', 'Песчаные дюны в пустыне', 'Романтический мост в вечернем свете',
  'Улица с цветными домами', 'Яхты в маленькой гавани', 'Кристально чистое горное озеро', 'Поле с маковыми цветами',
  'Маленькая хижина в горах', 'Закат в тропиках', 'Стадо оленей на рассвете', 'Городской парк с фонтаном',
  'Облачный горизонт над мегаполисом', 'Гребной канал с лодками', 'Старинный замок в горах'];

const messages = ['Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];


const names = ['Алексей', 'Мария', 'Иван', 'Екатерина', 'Дмитрий', 'Ольга', 'Николай', 'Анна', 'Сергей', 'Елена',
  'Владимир', 'Татьяна', 'Артур', 'Наталья', 'Павел', 'Ирина', 'Кирилл', 'Светлана', 'Максим', 'Юлия'];

function getRandomPhotoObjects({ objectParameters }) {
  const {
    paramCount,
    paramGetRandomInteger,
    paramGetUniqueValue,
    paramGetRandomArrayElements,
    paramDescriptions,
    paramRandomValue,
    paramObjectsCount,
    paramCommentsCount,
    paramAvatarsCount,
    paramSentencesCount,
    paramLikesCount
  } = objectParameters;

  const objects = [];
  const getUniqueCommentIdValue = paramGetUniqueValue(paramGetRandomInteger, paramRandomValue.MIN, paramRandomValue.MAX);
  const getUniquePhotoIdValue = paramGetUniqueValue(paramGetRandomInteger, paramObjectsCount.MIN, paramObjectsCount.MAX);
  const getUniqueUrlValue = paramGetUniqueValue(paramGetRandomInteger, paramObjectsCount.MIN, paramObjectsCount.MAX);


  for (let i = 0; i < paramCount; i++) {
    const comments = [];
    const commentsCount = paramGetRandomInteger(paramCommentsCount.MIN, paramCommentsCount.MAX);

    for (let j = 0; j < commentsCount; j++) {
      const commentId = getUniqueCommentIdValue();
      const avatar = paramGetRandomInteger(paramAvatarsCount.MIN, paramAvatarsCount.MAX);
      const commentsList = paramGetRandomArrayElements(messages, paramGetRandomInteger, paramSentencesCount.MAX);
      const name = paramGetRandomArrayElements(names, paramGetRandomInteger);

      comments.push({
        commentId,
        avatar,
        commentsList,
        name
      });
    }

    const photoId = getUniquePhotoIdValue();
    const url = getUniqueUrlValue();
    const description = paramDescriptions[paramGetRandomInteger(0, paramDescriptions.length)];
    const likes = paramGetRandomInteger(paramLikesCount.MIN, paramLikesCount.MAX);

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

const parameters = {
  paramCount: OBJECTS_COUNT.MAX,
  paramGetRandomInteger: getRandomInteger,
  paramGetUniqueValue: getUniqueValue,
  paramGetRandomArrayElements: getRandomArrayElements,
  paramDescriptions: photoDescriptions,
  paramRandomValue: RANDOM_VALUE,
  paramObjectsCount: OBJECTS_COUNT,
  paramCommentsCount: COMMENTS_COUNT,
  paramAvatarsCount: AVATARS_COUNT,
  paramSentencesCount: SENTENCES_COUNT,
  paramLikesCount: LIKES_COUNT
};

const generatedObjects = getRandomPhotoObjects({objectParameters: parameters});
console.log(generatedObjects);

