const o = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

const romanToInt = function (s) {
    /**
     *   1.取出字符
     *   2.前后比较
     *   3. 累加
     */
    const a = s.split('')
    let total = o[a[0]]
    for (let i = 0; i < a.length - 1; i++) {
        if (o[a[i]] >= o[a[i + 1]]) {
        total += o[a[i + 1]]
        } else {
        total += o[a[i + 1]] - o[a[i]] * 2
        }
    }
    return total
}
