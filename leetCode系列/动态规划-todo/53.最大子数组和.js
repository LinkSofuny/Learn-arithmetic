/**
 * @param {number[]} nums
 * @return {number}
 * 找到一个连续的子数组, 它们的和最大 返回它们的和
 */
//  f(i) 代表 以 i 个数为结尾的的 连续子数组最大和
//  f(i - 1) + nums[i], nums[i]
// 当前问题的答案, 可以用它的子问题的答案构成
var maxSubArray = function(nums) {
    // 记 f(i) 是 从 0 到 i 的 连续最大子数组和
    // 那么扩展这个子数组, 要做的事就是 i 变大 然后把 num[i] 加进去, 看看哪边大
    // 如果加上更大 我们就加 否则 就不加
    let pre = nums[0], ans = 0
    for (let index = 1; index < nums.length; index++) {
        pre = Math.max((pre + nums[index]), nums[index])
        ans = Math.max(pre, ans)
    }
    return ans
};
// 应该找到动态规划的规律
// 根据要求的答案, 总结一个公式,  这个公式的解 是一个问题的子问题的范式
// 所有根据这个问题分解出来的子问题都是遵循这个公式的, 我们每次只要找出这个子问题的最优解并将他们合起来即可
let nums = [5,4,-1,7,8]

maxSubArray(nums)