class _Selection {
    sort(arr) {
        //....
        const N = arr.length;
        /*
            每次去判断 arr[min] 和 arr[j] 大小 如果 arr[min] > 0
                证明: j才是最小的指针 将其赋值给 min
            所有情况排除完毕 则让 min 移动到当前位置
                然后 i++
            总结: 这个排序实际上就选择的时候 每次都假设我们首个元素为最小元素然后挨个比较
        */
        for (let i = 0; i < N; i++) {
            let min = i;
            for (let j = i + 1; j < N; j++) {
                if (this.less(arr[min], arr[j]) > 0)
                    min = j;
            }
            this.exch(arr, i, min);
        }
    }
    less(A, B) { return A - B; /* 这里可能需要做区分 */ }
    // 交换
    exch(arr, i, j) {
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    show(arr) { for (let i = 0; i < arr.length; i++)
        console.log(arr[i] + ''); }
    isSorted(arr) { for (let i = 0; i < arr.length; i++)
        return !!this.less(arr[i], arr[i - 1]); }
}
let arr = [1, 5, 6, 7, 8, 9, 10, 9, 60, 50, 2, 3];
const S = new _Selection();
debugger;
S.sort(arr);
console.log(arr);
