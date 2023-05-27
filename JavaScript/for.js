// BEGIN (write your solution here)
const encrypt = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i += 2) {
    const nextSymbol = string[i + 1] || '';
    result = `${result}${nextSymbol}${string[i]}`;
  }
  return result;
};
// END

export default encrypt;

