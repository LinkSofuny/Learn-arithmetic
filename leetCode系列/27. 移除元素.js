/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if (!nums.length || val === undefined || val === null) return
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === val) {
            nums.splice(index, 1)
            index--
        }
    }
    return nums.length
};
/**
 * 两种方法, 执行上感觉差不多
 * 但是这种更为精妙
 *  1. 定义一个左右指针(其实我觉得快慢指针更合适)
 *  2. 右指针负责扫描元素
 *  3. 左指针负责指向当前要去除的元素(因为如果当前元素, 不是目标元素的话 它就会挪走, 是的话, 就会停着, 等待置换)
 *  4. 左指针还有一个作用就是他的挪动证明当前存在多少非目标元素
 * @param {*} nums 
 * @param {*} val 
 * @returns 
 */
var removeElement = function(nums, val) {
    if (!nums.length || val === undefined || val === null) return
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
};
let nums = [3,2,2,3], val = 3

console.log(removeElement(nums, val));