/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let cur = 0;
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (num === 1) {
      cur += 1;
    } else {
      max = Math.max(cur, max);
      cur = 0;
    }
  }
  return Math.max(cur, max);
};
