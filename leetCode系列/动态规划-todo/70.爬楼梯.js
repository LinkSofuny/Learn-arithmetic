/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let p = 0, q = 0, r = 1
    // 这道题最难的地方在于找到转移方程 f(x) = f(x - 2) + f(x - 1)    
    // 其次就是滚动数组的的思想, 不过毕竟第一次接触, 下次就知道怎滚动了
    for (let i = 1; i <= n; i++) {
        // f(x) = f(x - 1) + f (x - 2)
        p = q
        q = r
        r = q + p
    }

    return r
};