/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num !== 0) {
      nums[j] = num;
      j++;
    }
  }

  for (let index = j; index < nums.length; index++) {
    nums[index] = 0;
  }

  return nums;
};
