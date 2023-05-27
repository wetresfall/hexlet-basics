// BEGIN (write your solution here)
const filterString = (string, num) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== num) {
      result = `${result}${string[i]}`;
    }
  }
  
  return result;
}
// END

export default filterString;

