//Задача №1. Функция для проверки длины строки.
{
  function checkStringLength(string, maxLength) {
    const stringLength = string.length;

    return stringLength <= maxLength;
  }

  console.log('\n--- Тесты для checkStringLength ---');
  console.log(
    `Проверяемая строка короче или равна 20 символам: ${checkStringLength('проверяемая строка', 20) === true}`
  );

  console.log(
    `Проверяемая строка короче или равна 18 символам: ${checkStringLength('проверяемая строка', 18) === true}`
  );

  console.log(
    `Проверяемая строка короче или равна 10 символам: ${checkStringLength('проверяемая строка', 10) === true}`
  );
}

//Задача №2. Функция для проверки, является ли строка палиндромом.
{
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

  console.log('\n--- Тесты для checkPalindrome ---');
  console.log(
    `Строка является палиндромом: ${checkPalindrome('топот') === true}`
  );
  console.log(
    `Строка является палиндромом с разным регистром: ${checkPalindrome('ДовОд') === true
    }`
  );
  console.log(
    `Строка не является палиндромом: ${checkPalindrome('Кекс') === false}`
  );
  console.log(
    `Строка является палиндромом: ${checkPalindrome('Лёша на полке клопа нашёл ') === true
    }`
  );

  console.log(); //для точки останова
}

//Задача №3. Извлечение цифр из строк.
{
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

  console.log('\n--- Тесты для extractNumber---');
  console.log(
    `Аргумент начинается с числа: ${parseToPositiveInt('2023 год') === 2023}`
  );
  console.log(
    `Аргумент заканчивается на число: ${
      parseToPositiveInt('ECMAScript 2022') === 2022
    }`
  );
  console.log(
    `Аргумент содержит несколько чисел, в том числе и с плавющей точкой: ${
      parseToPositiveInt('1 кефир, 0.5 батона') === 105
    }`
  );
  console.log(
    `Аргумент закначивается на число с нолями: ${
      parseToPositiveInt('агент 007') === 7
    }`
  );
  console.log(`Аргумент строка без чисел: ${isNaN(parseToPositiveInt('а я томат'))}`);
  console.log(`Аргумент число: ${parseToPositiveInt(2023) === 2023}`);
  console.log(`Аргумент отрицательное число: ${parseToPositiveInt(-1) === 1}`);
  console.log(`Аргумент число с плавющей точкой: ${parseToPositiveInt(1.5) === 15}`);
}

