/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
    let n = nums.length,
        res = 0
    for(let i = 0; i < n; i++) {
        // 确保不会比当前的值小 或者 大
        let maxValue = -Number.MAX_VALUE, minValue = Number.MAX_VALUE
        for (let j = i; j < n; j++) {
            maxValue = Math.max(maxValue, nums[j])
            minValue = Math.min(minValue, nums[j])
            res += maxValue - minValue
        }
    }
    return res
};
