/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    while (i < j && nums[i] !== val) {
      i++;
    }
    while (i < j && nums[j] === val) {
      j--;
    }

    [nums[j], nums[i]] = [nums[i], nums[j]];
  }

  return nums[i] === val ? i : i + 1; // 记得最后一个可能不是要删除的，所以要加上1
};
