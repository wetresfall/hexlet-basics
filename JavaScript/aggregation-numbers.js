/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const multiplyNumbersFromRange = (first, second) => {
  let i = first;
  let sum = 1;

  while (i <= second) {
    sum = sum * i;
    i = i + 1;
  }
  return sum;
};
// END

export default multiplyNumbersFromRange;

