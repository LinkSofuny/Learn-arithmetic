/*
    1. 给定一个常数, 实际上这个常数也可以自己来定, 他会影响shell排序的效率
    2. 实际上 shell 就是 插入排序的一个优化版本
    3. 基于 h 序列, 将数组 分割成一个 子数组 基于这个子数组做排列. 在处理需要交换的元素相隔特别远的时候尤为有效
    4. 每次对于一个子数组处理完毕 h 递增一次 所以也成为 h递增序列
    5. 当从 h 开始到 N 位置所有的子数组处理完毕后 h / 3 重新开始直到 h 为 1

*/

const floor = (val) => Math.floor(val);
class Shell {
    sort(arr) {
        //....
        const N = arr.length;
        let h = 1;
        while (h < floor(N / 3))
            h = 3 * h + 1;
        debugger;
        while (h >= 1) {
            for (let i = h; i < N; i++) {
                for (let j = i; j >= h && this.less(arr[j], arr[j - h]); j -= h) {
                    this.exch(arr, j - h, j);
                }
            }
            h = floor(h / 3);
        }
    }
    less(A, B) { return A - B < 0; /* 这里可能需要做区分 */ }
    // 交换
    exch(arr, i, j) {
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    show(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i] + '');
    }
    isSorted(arr) {
        for (let i = 0; i < arr.length; i++)
            return !!this.less(arr[i], arr[i - 1]);
    }
}
let arr = [10, 2, 3, 5, 7, 1, 6, 20, 30, 40, 67, 70, 21, 22,23,24,25,26,27,28];
const S = new Shell();
debugger;
S.sort(arr);
console.log(arr);
