/**
 * 1. _uF 默认初始化所有触点
 * 2. union 在 p 和 q 之间添加一条连接
 * 3. find 找到目标触电的标识符
 * 4. connected 如果 p 和  q 存在于同一个分量中则返回 true
 * 5. count 连通分量的数量
*/
class __uF {
    constructor(N) {
        this.init(N);
    }
    init(N) {
        this.count = N;
        this.id = [];
        for (let i = 0; i < N; i++)
            this.id[i] = i;
    }
    getId() {
        return this.id;
    }
    find(p) {
        return this.id[p];
    }
    // 一开始本质上是一个一级树, 大家都指向一个根节点
    // 现在是一个多级的树, 我们只需让节点指向 他减少了很多操作
    // find 需要每次都遍历整个数组
    // union 
    connect(p, q) {
        return this.find(p) === this.find(q);
    }
    union(p, q) {
        const pId = this.id[p];
        const qId = this.id[q];
        if (pId === qId)
            return;
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pId)
                this.id[i] = qId;
        }
    }
}
const _uF = new __uF(10);
_uF.union(4, 3);
_uF.union(3, 8);
_uF.union(6, 5);
_uF.union(9, 4);
_uF.union(2, 1);
_uF.union(8, 9);
_uF.union(5, 0);
_uF.union(7, 2);
_uF.union(6, 1);
_uF.union(1, 0);
_uF.union(6, 7);
console.log('_uF.getId()', _uF.getId());
