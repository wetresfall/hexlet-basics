/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const even = (str) => {
  let i = 1;
  let res = '';
  while (i < str.length) {
    res = res + str[i];
    i = i + 2;
  }
  
  return res;
}
// END

export default even;

