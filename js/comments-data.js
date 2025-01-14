import {generateUniqueInteger, getRandomInteger, getRandomArrayElements} from './util.js';

const CommentsCount = {
  MIN: 0,
  MAX: 30
};

const AvatarsCount = {
  MIN: 1,
  MAX: 6
};

const SentencesCount = {
  MIN: 1,
  MAX: 2
};

const RandomRange = {
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
  const getUniqueCommentIdValue = generateUniqueInteger(getRandomInteger, RandomRange.MIN, RandomRange.MAX);
  const commentsCount = getRandomInteger(CommentsCount.MIN, CommentsCount.MAX);

  for (let j = 0; j < commentsCount; j++) {
    const commentId = getUniqueCommentIdValue();
    const avatar = `img/avatar-${getRandomInteger(AvatarsCount.MIN, AvatarsCount.MAX)}.svg`;
    const commentsList = getRandomArrayElements(MESSAGES, getRandomInteger, SentencesCount.MAX);
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
