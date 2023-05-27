import { reverse } from '../../../src/hexlet/string.js';

// BEGIN (write your solution here)
const convertText = (string) => {
  const firstChar = string.slice(0, 1);

  return (firstChar === firstChar.toUpperCase()) ? string : reverse(string);
};
// END

export default convertText;

