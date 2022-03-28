/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let left = 0
    let right = k = nums.length - 1
    let result = []
    while(left <= right) {
      if (nums[left] * nums[left] <= nums[right] * nums[right]) {
        result[k] = nums[right--] ** 2
      } else {
        result[k] = nums[left++] ** 2
      }
      k--
    }
    return result
  };

  /**
   * 双指针其实就是
   *    1. 双端向中间靠拢
   *    2. 检测平方后两边谁大
   *    3. 大的保存到数组中(同时排序)
   */