const truncate = (text, length) => {
  // BEGIN (write your solution here)
  let result = `${text.slice(0, length)}...`;
  return result;
  // END
};

export default truncate;

