import { length } from 'hexlet-basics/string';

const text = 'Never forget what you are, for surely the world will not';

// BEGIN (write your solution here)
const result = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
console.log(result);
// END

