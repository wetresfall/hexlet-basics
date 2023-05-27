/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const joinNumbersFromRange = (first, last) => {
  let i = first;
  let result = "";

  while (i <= last) {
    result = result + i;
    i++;
  }

  return result;
};
// END

export default joinNumbersFromRange;

