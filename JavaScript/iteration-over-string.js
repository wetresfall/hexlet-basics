/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const printReversedWordBySymbol = (word) => {
  let i = word.length;

  while (i > 0) {
    console.log(word[i - 1])
    i = i - 1;
  }
}
// END

export default printReversedWordBySymbol;

