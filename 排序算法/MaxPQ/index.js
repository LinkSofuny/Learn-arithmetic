/*
    基于堆的优先队列
*/
var MaxPQ = /** @class */ (function () {
    function MaxPQ() {
        this.N = 0; //  存储于pq[1..N]中，pq[0]没有使用
        this.pq = new Array();
    }
    MaxPQ.prototype.isEmpty = function () { return this.pq.length === 0; };
    MaxPQ.prototype.size = function () { return this.N; };
    // 插入
    MaxPQ.prototype.insert = function (v) {
        this.pq[++this.N] = v;
        this.swim(this.N);
    };
    MaxPQ.prototype.delMax = function () {
        var max = this.pq[1];
        this.exch(1, this.N--);
        this.pq[this.N + 1] = null;
        this.sink(1);
        return max;
    };
    MaxPQ.prototype.less = function (i, j) {
        return this.pq[i] < this.pq[j]; /* 这里可能需要做区分 */
    };
    // 交换
    MaxPQ.prototype.exch = function (i, j) {
        var t = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = t;
    };
    MaxPQ.prototype.swim = function (k) {
        // pJ 为 父节点, 与父节点作比较 如发现 父节点小于当前节点则交换他 依次循环
        var pJ = Math.floor(k / 2); // 父节点
        while (k > 1 && this.less(pJ, k)) {
            this.exch(pJ, k);
            k = pJ;
        }
    };
    MaxPQ.prototype.sink = function (k) {
        // k * 2 为 子节点 k * 2 ++ 临近子兄弟节点, 我们只取最大的并作比较
        while (k * 2 <= this.N) {
            var j = k * 2; // 子节点
            if (j < this.N && this.less(j, j + 1))
                j++;
            if (!this.less(k, j))
                break;
            this.exch(k, j);
            k = j;
        }
    };
    return MaxPQ;
}());
var arr = [10, 1, 3, 4, 5, 6];
var S = new MaxPQ();
arr.forEach(function (item) { return S.insert(item); });
console.log('S', S);
