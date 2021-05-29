/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (map[num]) return true;
    map[num] = true;
  }
  return false;
};
