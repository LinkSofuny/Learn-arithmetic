class Merge<T> {

    private aux: T[]; // 辅助函数
    constructor () {
        this.aux = []
    }

    public sort(a: T[], lo: number, hi: number) {
        /*
            1. 确定中位数, 归并用
            2. 递归调用, 将数组分成两段
            3. 分到首位只有一位的时候结束
        */
       if (lo >= hi ) return
       let mid = Math.floor(lo + (hi - lo) / 2)
       this.sort(a, lo, mid)
       this.sort(a, mid + 1, hi)
       this.merge(a, lo, mid, hi)
    }

    public less(A: any, B: any):boolean { return A - B > 0 /* 这里可能需要做区分 */}
    // 交换
    public exch(a: T[], i: number, j: number) {
        const t = a[i]
        a[i] = a[j]
        a[j] = t
    }

    public merge(a: T[], lo: number, mid: number, hi: number) {
        let i = lo;
        let j = mid + 1
        // 1. 将 a 复制到 aux
        for (let k = lo; k <= hi; k++) this.aux[k] = a[k]

        for (let k = lo; k <= hi; k++) {
            if (i > mid)  a[k] = this.aux[j++]
            else if ( j > hi ) a[k] = this.aux[i++]
            else if (this.less(this.aux[i], this.aux[j])) a[k] = this.aux[j++]
            else a[k] = this.aux[i++]
        }
    }

    public show(a: T[]) { 
        for (let i = 0; i < a.length; i++) 
            console.log(a[i] + '') 
    }

    public isSorted(a: T[]) { 
        for (let i = 0; i < a.length; i++)  
            return !!this.less(a[i], a[i - 1]) 
    }
}

let arr = [10, 2, 3, 5, 7, 1]
const S1 = new Merge()
debugger
S1.sort(arr, 0, arr.length - 1)
console.log(arr);
