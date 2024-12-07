const objectsCount = 26;
const maxCommentsCount = 30;
const avatarsCount = 6;
const maxSentencesCount = 2;

const photoDescriptions = [
  'Закат над океаном', 'Густой лес в тумане', 'Старая каменная башня', 'Поле с подсолнухами',
  'Заснеженные горы на рассвете', 'Уличное кафе в Париже', 'Тихий пляж с белым песком', 'Пейзаж с речкой и мостиком',
  'Яркий фейерверк ночью', 'Городская улица в дождь', 'Цветущий сад весной', 'Корабль в открытом море',
  'Тропа в осеннем лесу', 'Кошка на подоконнике', 'Ночное небо с луной', 'Живописный водопад',
  'Рынок со свежими фруктами', 'Древние руины в пустыне', 'Скала у побережья', 'Группа воздушных шаров в небе',
  'Кофе и книги на столе', 'Пастбище с коровами', 'Детский парк с аттракционами', 'Чайный домик в Японии',
  'Маяк на скалистом берегу', 'Озеро с отражением леса', 'Снежная деревня зимой', 'Песчаные дюны в пустыне',
  'Романтический мост в вечернем свете', 'Улица с цветными домами', 'Яхты в маленькой гавани',
  'Кристально чистое горное озеро', 'Поле с маковыми цветами', 'Маленькая хижина в горах',
  'Закат в тропиках', 'Стадо оленей на рассвете', 'Городской парк с фонтаном', 'Облачный горизонт над мегаполисом',
  'Гребной канал с лодками', 'Старинный замок в горах'
];

const messagesString = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать ' +
  'палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках ' +
  'и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у ' +
  'меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. ' +
  'Как можно было поймать такой неудачный момент?!';

const messages = messagesString.split('.');

const names = [
  'Алексей', 'Мария', 'Иван', 'Екатерина', 'Дмитрий', 'Ольга', 'Николай', 'Анна', 'Сергей', 'Елена', 'Владимир',
  'Татьяна', 'Артур', 'Наталья', 'Павел', 'Ирина', 'Кирилл', 'Светлана', 'Максим', 'Юлия'];

function getRandomObjects(count, getRandomInt, getUniqueVal, createNewPhotoObject, createNewCommentObject,
  getRandomElement, descriptions) {
  const objects = [];
  const getUniqueCommentIdValue = getUniqueVal(getRandomInt, 0, Number.MAX_VALUE);
  const getUniquePhotoIdValue = getUniqueVal(getRandomInt, 0, objectsCount);
  const getUniqueUrlValue = getUniqueVal(getRandomInt, 0, objectsCount);


  for (let i = 0; i < count; i++) {
    const comments = [];
    const commentsCount = getRandomInt(0, maxCommentsCount);
    for (let j = 0; j < commentsCount; j++) {
      const commentId = getUniqueCommentIdValue();
      const avatar = getRandomInt(0, avatarsCount);
      const commentsList = getRandomElement(messages, getRandomInt, maxSentencesCount);
      const name = getRandomElement(names, getRandomInt);

      comments.push(
        createNewCommentObject(
          commentId,
          avatar,
          commentsList.toString(),
          name.toString()
        )
      );
    }

    const photoId = getUniquePhotoIdValue();
    const url = getUniqueUrlValue();
    const description = descriptions[getRandomInt(0, descriptions.length)];
    const likes = getRandomInt(15, 200);

    objects.push(
      createNewPhotoObject(
        photoId,
        url,
        description,
        likes,
        comments
      )
    );
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

  return elements;
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createPhotoObject(id, url, description, likes, comments) {
  const newObject = {};

  newObject.id = id;
  newObject.url = `photos/${url}.jpg`;
  newObject.description = description;
  newObject.likes = likes;
  newObject.comments = comments;

  return newObject;
}

function createCommentObject(id, avatar, message, name) {
  const newObject = {};

  newObject.id = id;
  newObject.avatar = `img/${avatar}.jpg`;
  newObject.message = message;
  newObject.name = name;

  return newObject;
}

let generatedObjects = getRandomObjects(objectsCount, getRandomInteger, getUniqueValue, createPhotoObject, createCommentObject, getRandomArrayElements, photoDescriptions);
console.log(generatedObjects);
