/**
 * 这是一道栈题
 * @param {string} s
 * @return {number}
 * 遍历字符串
 *   ( 入栈 + 1
 *   ) 出栈 - 1
 * 栈不能存在长度, 最后不许为0
 * 每次保存
 */
 var maxDepth = function(s) {
    let stack = 0,
        ans = 0
    for (let index = 0; index < s.length; index++) {
        if (s[index] === '(') {
            stack++
            ans = Math.max(ans, stack)
        } else if (s[index] === ')') {
            stack--
        }
    }

    return ans
};