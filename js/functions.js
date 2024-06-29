//Функция для проверки длины строки.

const checkLineLength = (line, maxLength) => line.length <= maxLength;

// Строка короче 20 символов
checkLineLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLineLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLineLength('проверяемая строка', 10); // false

/*
console.log(checkLineLength('проверяемая строка', 20)); // true
console.log(checkLineLength('проверяемая строка', 18)); // true
console.log(checkLineLength('проверяемая строка', 10)); // false
*/


//Функция для проверки, является ли строка палиндромом.

const isPalidrom = (line) => {
  const cleaned = line.toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed = reversed + cleaned[i];
  }
  return cleaned === reversed;
};


// Строка является палиндромом
isPalidrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalidrom('ДовОд'); // true
// Это не палиндром
isPalidrom('Кекс'); // false

/*
console.log(isPalidrom('топот'));
console.log(isPalidrom('ДовОд'));
console.log(isPalidrom('Кекс'));
*/
