class Insertion {
    sort(arr) {
        //....
        const N = arr.length;
        for (let i = 0; i < N; i++) {
            // 插入排序
            // 1. 由后往前, 对相邻两位进行比较, 如不同则交换位置
            for (let j = i; j > 0 && this.less(arr[j], arr[j - 1]); j--) {
                this.exch(arr, j - 1, j);
            }
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
// let arr = [10, 2, 3, 5, 7, 1]
// const S = new Insertion()
// debugger
// S.sort(arr)
// console.log(arr);
