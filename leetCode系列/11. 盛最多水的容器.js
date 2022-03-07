/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    // (x2 - x1) * y2
    // y2 应该尽可能是倒数第二高的 
    let res = 0
        left = 0,
        right = height.length - 1
    while(left < right) {
        let temp = (right - left) * Math.min(height[left], height[right])
        res = Math.max(temp, res)
        if (height[right] - height[left] > 0) {
            left++
        } esle {
            right--
        }
    }
    return res
};s