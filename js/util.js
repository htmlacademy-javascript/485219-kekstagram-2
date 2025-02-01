function getRandomUniqueArrayElements(array, maxLength) {
  if (maxLength > array.length) {
    throw new Error('maxLength не может быть больше длины массива');
  }

  const uniqueElements = new Set();
  while (uniqueElements.size < maxLength) {
    uniqueElements.add(array[getRandomInteger(0, array.length - 1)]);
  }

  return [...uniqueElements];
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  const floorResult = Math.floor(result);
  return floorResult;
}

export {getRandomInteger, getRandomUniqueArrayElements};
