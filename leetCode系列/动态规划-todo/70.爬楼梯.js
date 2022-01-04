/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    /**
     *  有哪几种方法让它最终余 0
     *  边界情况: 
     *      1. 为 0 返回 0 
     *  否则:
     *      1. 余 2
     *          0 => count++
     *      否则 余 1
     *          0 => count++
     *      
     */
    if (!n) return 0
    if (n === 1) return 1
    let count = 1
    if (n % 2 === 0) count++
    else {
        // 证明有 c 个 2 和 1 个 1
        count += ( n >> 1 ) + 1
    }
    return count
};

console.log(climbStairs(4));