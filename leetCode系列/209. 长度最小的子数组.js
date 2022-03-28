/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let l = r = sum = 0;
    let len = nums.length
    let result = len + 1
    while(r < len) {
      sum += nums[r++]
      while(sum >= target) {
        result = result < r - l ? result : r - l
        sum -= nums[l++]
      }
    }
    return result > len ? 0 : result
  };
