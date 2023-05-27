// BEGIN (write your solution here)
const getHiddenCard = (number, stars = 4) => {
  return `${'*'.repeat(stars)}${number.slice(-4)}`
};
// END

export default getHiddenCard;

