/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = Array(26).fill(0);

  for (let index = 0; index < t.length; index++) {
    map[t.charCodeAt(index) - 97] += 1;
  }

  for (let index = 0; index < s.length; index++) {
    map[s.charCodeAt(index) - 97] -= 1;
  }

  for (let index = 0; index < map.length; index++) {
    if (map[index] === 1) {
      return String.fromCharCode(index + 97);
    }
  }
};
