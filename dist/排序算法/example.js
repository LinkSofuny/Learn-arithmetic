class Example {
    sort(arr) {
        //....
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
