/**
 * 1. UF 默认初始化所有触点
 * 2. union 在 p 和 q 之间添加一条连接
 * 3. find 找到目标触电的标识符
 * 4. connected 如果 p 和  q 存在于同一个分量中则返回 true
 * 5. count 连通分量的数量
*/
class UF {
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
