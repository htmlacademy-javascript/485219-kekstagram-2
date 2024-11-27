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

    for (var i = 0; i < formattedString.length; i++) {
      for (var j = formattedString.length - i - 1; j > 0; j--) {

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
  function parseDigitsToInt(string) {
    let formattedString = '';

    for (var i = 0; i < string.length; i++) {
      if (!isNaN(parseInt(string[i], 10))) {
        formattedString += string[i];
      }
    }

    return formattedString;
  }

  console.log(parseDigitsToInt('12vb4'));
  console.log();
}

