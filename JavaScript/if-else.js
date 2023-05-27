// BEGIN (write your solution here)
const normalizeUrl = (address) => {
  if (address.startsWith('https://')) {
    return address;
  }
  return `https://${address}`;
}
// END

export default normalizeUrl;

