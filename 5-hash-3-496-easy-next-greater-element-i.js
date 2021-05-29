/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 栈 + hash的方式，时间复杂度更加低
var nextGreaterElement = function (nums1, nums2) {
  const array = [];
  const map = {};
  for (let index = 0; index < nums2.length; index++) {
    const num = nums2[index];
    while (array[array.length - 1] < num) {
      map[array.pop()] = num;
    }
    array.push(num);
  }
  return nums1.map((item) => map[item] || -1);
};
