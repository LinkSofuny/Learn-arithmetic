/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    /**
        1. 确定一个字符串 作为验证值, 挨个验证
        2. 全部通过则尝试加1
        3. 有一个不通过直接返回
     */
    debugger
    if (!strs.length || !strs[0].length) return ''
    if (strs.length === 1) return strs[0]
    let arr = strs[0].split('')
    let aim = arr[0]
    for(let i = 0; i < arr.length; i++ ) {
        let reg = new RegExp('^' + aim)
        if (strs.every(item => reg.test(item))) {
            aim += arr[i + 1] ? arr[i + 1] : ''
        } else {
            aim = aim.slice(0, aim.length - 1)
            break; 
        }
    }
    return aim
};
