// We wrote the reverse() function solely for our exercises
// It uses some techniques that we haven't covered in our lessons yet
const reverse = (s) => s.split('').reverse().join('');

// BEGIN (write your solution here)
const isPalindrome = (word) => word.toLowerCase() === reverse(word.toLowerCase());
const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;

