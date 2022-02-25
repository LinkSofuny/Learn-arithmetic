/**
 * @param {number} x
 * @return {boolean} 字符串
 */
 var isPalindrome = function(x) {
    if (x < 0) return false
    let str = x + ''
    let left = 0 // 0 1
    let right = str.length - 1 // 1 0
    let result = true
    while(left < right) {
        if (str[left++] !== str[right--]) {
            result = false
            break
        }
    }
    return result    
};

// 非字符串法

var isPalindrome = function(x) {
    if (x < 0 || (x %+ 10 !== 0 && x !== 0)) return false
    
    const a = 12321
    const b = a % 10
    const c = a / 10
    const d = b * 10 + b // 倒数

    let revertNumber = 0
    while(x > revertNumber) {
        /**
         * 对于 revertNumber 首次它是余数, 第二次开始就是 x 的倒数了
         */
        revertNumber = revertNumber * 10 + x % 10
        x = Math.floor(x / 10)
    }
    // 偶数直接相等, 如不, 则判断一下奇数的情况
    return x === revertNumber || x === Math.floor(revertNumber / 10)
}