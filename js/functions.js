function validateStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

function checkPalindrome (string) {
  // Убираем пробелы и приводим к нижнему регистру для корректности
  const cleanStr = string.toLowerCase().replace(/\s/g, '');
  const stringLength = cleanStr.length;
  const half = Math.floor(stringLength / 2);

  // Берем первую половину
  const firstHalf = cleanStr.slice(0, half);
  // Берем вторую половину и разворачиваем её
  const secondHalfReversed = cleanStr.slice(stringLength - half).split('').reverse().join('');

  return firstHalf === secondHalfReversed;
}

const extractDigits = (input) => {
  const str = String(input);
  let resultString = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      resultString += char;
    }
  }

  if (resultString === '') {
    return NaN;
  }
  return Number(resultString);
};
