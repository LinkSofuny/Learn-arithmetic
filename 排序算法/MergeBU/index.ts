class MergeBU<T> {

    private aux: T[]; // 辅助函数
    constructor () {
        this.aux = []
    }

    public sort(a: T[]) {
        /*
            1. 自底向上
            2. 拿到最小数组, 两两, 三三合并
            3. 考虑最终条件
        */
        const N = a.length
        // sz 是一个数组的长度单位
        // 每次遍历数组, 都应该基于 sz 来作为跨度, 每次 merge
        // 都需要用到两个数组 所以 应该以 sz + sz 做为 每次循环的跨度
        for (let sz = 1; sz < N; sz = sz + sz) {
            for (let lo = 0; lo < N - sz; lo += sz + sz) {
                // 这里的lo指的是 每个子数组的索引
                this.merge(a, lo, lo+sz-1, Math.min(lo+sz+sz-1, N-1));
                
            }
            
        }
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
const S2 = new MergeBU()
debugger
S2.sort(arr)
console.log(arr);
