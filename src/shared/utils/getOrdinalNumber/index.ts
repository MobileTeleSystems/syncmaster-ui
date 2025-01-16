/**
 * Util for getting number with its ordinal postfix
 *
 * @param value - number
 * @param onlyPostfix - flag for returning only postfix without number
 *
 * @returns - ordinal number
 */
export const getOrdinalNumber = (value: number, onlyPostfix = false): string => {
  const lastDigit = value % 10;
  const twoLastDigits = value % 100;
  let postfix = '';

  if (lastDigit === 1 && twoLastDigits !== 11) {
    postfix = 'st';
  } else if (lastDigit === 2 && twoLastDigits !== 12) {
    postfix = 'nd';
  } else if (lastDigit === 3 && twoLastDigits !== 13) {
    postfix = 'rd';
  } else {
    postfix = 'th';
  }

  if (onlyPostfix) {
    return postfix;
  }

  return `${value}${postfix}`;
};
