//Задача №1. Функция для проверки длины строки.
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

//Задача №2. Функция для проверки, является ли строка палиндромом.
function checkPalindrome(string) {
  const formattedString = string.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < formattedString.length; i++) {
    for (let j = formattedString.length - i - 1; j > 0; j--) {

      if (formattedString[i] === formattedString[j] && j > 1) {
        break;
      } else if (formattedString[i] === formattedString[j]) {
        return true;
      }

      return false;
    }
  }
}

//Задача №3. Извлечение цифр из строк.
function parseToPositiveInt(string) {
  let stringForloop;
  if (typeof string === 'string') {
    stringForloop = string;
  } else {
    stringForloop = string.toString();
  }

  let formattedString = '';
  for (let i = 0; i < stringForloop.length; i++) {
    if (!isNaN(parseInt(stringForloop[i], 10))) {
      formattedString += stringForloop[i];
    }
  }

  return formattedString !== '' ? +formattedString : NaN;
}

