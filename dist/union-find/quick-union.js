/**
 * 1. UF 默认初始化所有触点
 * 2. union 在 p 和 q 之间添加一条连接
 * 3. find 找到目标触电的标识符
 * 4. connected 如果 p 和  q 存在于同一个分量中则返回 true
 * 5. count 连通分量的数量
 * 加权算法的好处在于, 每次都是将小树归并到大的树, 并且每次归并都是归并与根节点, 这能极大的减少访问树的成本
*/
class UF {
    constructor(N) {
        this.init(N);
    }
    init(N) {
        this.count = N;
        this.id = [];
        this.sz = [];
        for (let i = 0; i < N; i++) {
            this.id[i] = i;
            this.sz[i] = 1;
        }
    }
    getId() {
        return this.id;
    }
    find(p) {
        // 触点 与 id 本质上是同一个东西
        while (p !== this.id[p])
            p = this.id[p];
        return p;
    }
    connect(p, q) {
        return this.find(p) === this.find(q);
    }
    union(p, q) {
        debugger;
        let i = this.find(p);
        let j = this.find(q);
        if (i === j)
            return;
        if (this.sz[i] < this.sz[j]) {
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        }
        else {
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
        this.count--;
    }
}
const uF = new UF(10);
uF.union(4, 3);
uF.union(3, 8);
uF.union(6, 5);
uF.union(9, 4);
uF.union(2, 1);
uF.union(8, 9);
uF.union(5, 0);
uF.union(7, 2);
uF.union(6, 1);
uF.union(1, 0);
uF.union(6, 7);
console.log('uF.getId()', uF.getId());
