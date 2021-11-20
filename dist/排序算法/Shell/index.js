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
let arr = [10, 2, 3, 5, 7, 1, 6, 20, 30, 40, 67, 70];
const S = new Shell();
debugger;
S.sort(arr);
console.log(arr);
