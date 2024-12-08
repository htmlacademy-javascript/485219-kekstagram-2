//Задача №1. Функция для проверки длины строки.
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

//Задача №2. Функция для проверки, является ли строка палиндромом.
function checkPalindrome(string) {
  const formattedString = string.replaceAll(' ', '').toLowerCase();

  let reverseString = '';
  for (let i = formattedString.length - 1; i >= 0; i--) {
    reverseString += formattedString[i];
  }
  return reverseString === formattedString;
}

//Задача №3. Извлечение цифр из строк.
function parseToPositiveInt(string) {
  const stringForloop = string.toString();

  let formattedString = '';
  for (let i = 0; i < stringForloop.length; i++) {
    if (!isNaN(parseInt(stringForloop[i], 10))) {
      formattedString += stringForloop[i];
    }
  }

  return formattedString !== '' ? +formattedString : NaN;
}
