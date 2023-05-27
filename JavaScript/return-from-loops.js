// BEGIN (write your solution here)
const hasChar = (string, num) => {
  let i = 0;
  while (i < string.length) {
    if (string[i] === num) {
      return true;
    }
    i += 1;
  }
  return false;
};
// END

export default hasChar;

