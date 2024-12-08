import {generateUniqueInteger, getRandomInteger, getRandomArrayElements} from './util.js';

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

const RANDOM_RANGE = {
  MIN: 0,
  MAX: 10000
};

const MESSAGES = ['Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];


const NAMES = ['Алексей', 'Мария', 'Иван', 'Екатерина', 'Дмитрий', 'Ольга', 'Николай', 'Анна', 'Сергей', 'Елена',
  'Владимир', 'Татьяна', 'Артур', 'Наталья', 'Павел', 'Ирина', 'Кирилл', 'Светлана', 'Максим', 'Юлия'];

function getRandomComments() {
  const comments = [];
  const getUniqueCommentIdValue = generateUniqueInteger(getRandomInteger, RANDOM_RANGE.MIN, RANDOM_RANGE.MAX);
  const commentsCount = getRandomInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX);

  for (let j = 0; j < commentsCount; j++) {
    const commentId = getUniqueCommentIdValue();
    const avatar = `img/avatar-${getRandomInteger(AVATARS_COUNT.MIN, AVATARS_COUNT.MAX)}.svg`;
    const commentsList = getRandomArrayElements(MESSAGES, getRandomInteger, SENTENCES_COUNT.MAX);
    const name = getRandomArrayElements(NAMES, getRandomInteger);

    comments.push({
      commentId,
      avatar,
      commentsList,
      name
    });
  }
  return comments;
}

export {getRandomComments};
