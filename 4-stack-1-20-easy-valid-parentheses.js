/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const arr = [];
  for (let index = 0; index < s.length; index++) {
    const c = s[index];
    if (Object.keys(map).includes(c)) {
      arr.push(c);
    } else if (map[arr[arr.length - 1]] === c) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};
