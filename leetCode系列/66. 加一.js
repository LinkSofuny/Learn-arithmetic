/**
 * @param {number[]} digits
 * @return {number[]}
 * 我的解法有什么问题?
 *  1. 从计算的角度思考了问题, 也就是把末位当成了 传统计算的 个位数, 然后安位计算, 这样效率不高
 */
//  var plusOne = function(digits) {
//     if (!digits.length) return
//     /**
//         1. 从尾部迭代
//         2. 是否需要循环的依据为+1后当前数字是否大于9
//      */
//     let lastIndex = digits.length - 1
//     while (true) {
//         if (digits[lastIndex] >= 9) {
//             digits[lastIndex] -= 9
//             if (lastIndex <= 0 ) {
//                 digits.unshift(1)
//                 break;
//             } else {
//                 lastIndex--
//             }
//         } else {
//             digits[lastIndex] += 1
//             break;
//         }
//     }
//     return digits
// };
/**
 * 
 * 实际上这题只需要解决三种情况即可
 *      1. [1, 2, 3] 不存在9 即最后一位+1
 *      2. [1, 2, 9] 存在一个9 即从最后一位不是 9 的开始 +1 之后全部置为0
 *      3. [9, 9, 9] 全部为9 这时候需要创建一个新数组, 比 n 大1位 第一位为1 其他全部填充0
 */

 let a = [8,9,9,9]
var plusOne = function(digits) {
    let n = digits.length
    for (let index = n - 1; index >= 0 ; index--) {
        if (digits[index] !== 9) {
            digits[index]++
            for (let j = index + 1; j < n; j++) {
                digits[j] = 0
            }
            return digits
        }
    }
    const ans = new Array(n + 1).fill(0)
    ans[0] = 1
    return ans
};

plusOne(a)