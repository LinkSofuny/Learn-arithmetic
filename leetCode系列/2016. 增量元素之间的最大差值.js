/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
 var maximumDifference = function(nums) {
    let premin = nums[0],
        ans = -1,
        n = nums.length - 1
    for(let i = 1; i <= n; i++) {
        if (premin < nums[i]) {
            ans = Math.max(ans, nums[i] - premin)
        } else {
            premin = nums[i]
        }
    }
    return ans
}

