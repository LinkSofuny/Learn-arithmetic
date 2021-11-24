class Quick<T> {
    /*
        1. 找一个随机点作为切分点
        2. 元素从左右侧开始向内扫描, 如果发现 左侧 大于 切分的元素 右侧 小于 切分的元素 则这两个元素对调
        3. 最终将 切分元素 和 j 做交换, 因为此时 j 前后的元素已经是与 切分元素 是有序的了

        4. sort 内递归调用sort, 即根据 j 分成两个子数组 数组内同样通过上述方法做排序
        5. 快排的做法是 找到分割点就进行排序 然后再切分
           而 归并排序的做法是 先切割到最细 由最小数组排序上来后合并
    */
    public sort(arr: T[], lo: number, hi: number) {
        /*
            1. 找到一个切分点
            2. 基于切分点内部递归调用
            3. j 元素为切分点
        */
        if (hi <= lo) return

        let j = this.partition(arr, lo, hi)
        this.sort(arr, lo, j - 1)
        this.sort(arr, j + 1, hi)
        
    }

    public partition (arr: T[], lo: number, hi: number): number {
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
            while (this.less(arr[++i], v)) if (i === hi) break;
            while (this.less(v, arr[--j])) if (j === lo) break;
            if (i >= j) break;
            this.exch(arr, i, j)
        }
        this.exch(arr, lo, j)
        return j
    }

    public less(A: any, B: any):boolean { return A - B < 0 /* 这里可能需要做区分 */}
    // 交换
    public exch(arr: T[], i: number, j: number) {
        const t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }
}

let arr = [-74,48,-20,2,10,-84,-5,-9,11,-24,-91,2,-71,64,63,80,28,-30,-58,-11,-44,-87,-22,54,-74,-10,-55,-28,-46,29,10,50,-72,34,26,25,8,51,13,30,35,-8,50,65,-6,16,-2,21,-78,35,-13,14,23,-3,26,-90,86,25,-56,91,-13,92,-25,37,57,-20,-69,98,95,45,47,29,86,-28,73,-44,-46,65,-84,-96,-24,-12,72,-68,93,57,92,52,-45,-2,85,-63,56,55,12,-85,77,-39]
const S2 = new Quick()
debugger
S2.sort(arr, 0, arr.length - 1)
console.log(arr);
