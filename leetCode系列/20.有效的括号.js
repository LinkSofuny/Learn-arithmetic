/**
 * @param {string} s
 * @return {boolean}
 */


 let obj = {
    '(': ")",
    '{': "}",
    '[': "]"
 }
/**
 * 1. 上面三个属于 入栈操作
 * 2. 下面三个属于 弹出操作
 * 3. 遇到前三个, 往栈里push 后面三个
 * 4. 遇到后面三个, 就从栈里pop, 如果值不一样, 返回false, 否则true
 */
function equal (s) {
    return s === '(' || s === '{' || s ==='['
}
var isValid = function(s) {
    debugger
    let arr = s.split('')
    let stuck = []
    
    if (arr.length % 2 !== 0) return false

    let flag = arr.every(item => {
        if (equal(item)) {
            return !!stuck.push(obj[item])
        } else {
            return stuck.pop() === item
        }
    })

    if (stuck.length !== 0) return false
    return flag
};
isValid("((")