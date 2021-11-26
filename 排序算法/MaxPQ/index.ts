/*
    基于堆的优先队列
*/
class MaxPQ<T> {
    private pq: T[]; // 基于堆的二叉树
    private N: number = 0; //  存储于pq[1..N]中，pq[0]没有使用

    constructor() {
        this.pq = new Array<T>()
    }

    public isEmpty() { return this.pq.length === 0 }

    public size() { return this.N }

    // 插入
    public insert(v: T) {
        this.pq[++this.N] = v
        this.swim(this.N) 
    }

    public delMax(): T {
        const max =  this.pq[1]
        this.exch(1, this.N--)
        this.pq[this.N + 1] = null
        this.sink(1)
        return max
    }

    public less(i: any, j: any):boolean { 
        return this.pq[i] < this.pq[j] /* 这里可能需要做区分 */
    }
    // 交换
    public exch(i: number, j: number) {
        const t = this.pq[i]
        this.pq[i] = this.pq[j]
        this.pq[j] = t
    }

    public swim (k: number) {
        // pJ 为 父节点, 与父节点作比较 如发现 父节点小于当前节点则交换他 依次循环
        let pJ = Math.floor(k / 2)// 父节点
        while (k > 1 && this.less(pJ, k)) {
            this.exch(pJ, k)
            k = pJ
        }
    }

    public sink (k: number) {
        // k * 2 为 子节点 k * 2 ++ 临近子兄弟节点, 我们只取最大的并作比较
        while ( k * 2 <= this.N) {
            let j = k * 2 // 子节点

            if (j < this.N && this.less(j, j + 1)) j++
            if (!this.less(k, j)) break;
            this.exch(k, j)
            k = j
        }
    }
}

let arr = [10, 1, 3, 4, 5, 6]
const S = new MaxPQ()
arr.forEach( item => S.insert(item))
console.log('S', S);
