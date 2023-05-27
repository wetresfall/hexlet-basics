// BEGIN (write your solution here)
const whoIsThisHouseToStarks = (who) => {
  let whoType
  if (who === 'Karstark' || who === 'Tally') {
    whoType = 'friend';
  } else if (who === 'Lannister' || who === 'Frey') {
    whoType = 'enemy';
  } else {
    whoType = 'neutral';
  }

  return `${whoType}`;
};
// END

export default whoIsThisHouseToStarks;

