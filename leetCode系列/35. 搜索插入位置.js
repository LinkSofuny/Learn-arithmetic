// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
//  // 我的解法不是很优雅
//  let result = 0
//  var searchInsert = function(nums, target, lo = 0, hi = nums.length - 1 ) {
//      if (target < nums[0]) return 0
//      if (target > nums[nums.length - 1]) return nums.length
//      if (lo >= hi) { return target > nums[lo] ? lo + 1 : lo }
     
//      let mid = ~~(lo + (hi - lo) / 2 )
//      let midVal = nums[mid]
//      if (target < midVal) result = searchInsert(nums, target, lo, mid - 1)
//      else if ( target > midVal ) result = searchInsert(nums, target, mid + 1, hi)
//      else { result = mid }
//      return result
//  };

 var searchInsert = function(nums, target) {
    debugger
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (target <= nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1 
        }
    }
    return left
 };
 searchInsert([1,3,5,6], 3)