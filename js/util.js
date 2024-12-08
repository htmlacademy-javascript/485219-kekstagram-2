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

export {getUniqueValue, getRandomInteger, getRandomArrayElements};
