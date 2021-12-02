function sortArray(arr: number[]): number[] {

    function exch(arr: number[], i: number, j: number) {
        const t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }

    function less(A: any, B: any):boolean { return A - B < 0 }

    function sort(a: number[], lo: number, hi: number) {
        /*
            1. 确定中位数, 归并用
            2. 递归调用, 将数组分成两段
            3. 分到首位只有一位的时候结束
        */

       if (hi <= lo) return

        let j = partition(a, lo, hi)
        sort(a, lo, j - 1)
        sort(a, j + 1, hi)
    }

    function partition (arr: number[], lo: number, hi: number): number {
        /*
            1. 左右指针分别从数组左右端开始
            2. 将首节点作为一个切分点
        */
        let i = lo, j = hi + 1, v = arr[lo]

        while (true) {
            /*
                1. 左侧 v 大于 a[++i] 否则 跳出
                2. 右侧 v 小于 a[--j] 否则 跳出
            */
            while (less(arr[++i], v)) if (i === hi) break;
            while (less(v, arr[--j])) if (j === lo) break;
            if (i >= j) break;
            exch(arr, i, j)
        }
        exch(arr, lo, j)
        return j
    }
    arr = arr.sort(() => 0.5 - Math.random())
    sort(arr, 0, arr.length - 1)

    return arr
};