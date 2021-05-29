/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 这题的时间复杂度和空间复杂度都不太好，但是易于理解
var nextGreaterElement = function (nums1, nums2) {
  const nums3 = [].concat(...nums2);
  const result = [];

  for (let index = 0; index < nums1.length; index++) {
    const num = nums1[index];

    let find = -1;
    while (nums2.length > 0) {
      const cur = nums2.pop();
      if (cur === num) {
        result.push(find);
        continue;
      } else if (cur > num) {
        find = cur;
      }
    }

    nums2 = [].concat(...nums3);
  }
  return result;
};
