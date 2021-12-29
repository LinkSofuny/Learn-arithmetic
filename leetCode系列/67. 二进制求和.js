/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 1. 迭代两个数组
 * 2. 分别判断两者是否小于0 小于的话补0
 * 3. 存储当前 是否进位 进位的话 下次 sum 值要加1
 * 是否可以不翻转数组?
 */
var addBinary = function(a, b) {
    let ca = 0,
    ans = ''
    for (let i = a.length - 1, j = b.length - 1; j >= 0 || i >= 0; j--, i--) {
        let sum = ca
        sum += i >= 0 ? +a[i] : 0
        sum += j >= 0 ? +b[j] : 0
        ans += sum % 2
        ca = sum >> 1
    }
    ans += ca ? '1' : ''
    return ans.split('').reverse().join()
};
addBinary("11", "1")

