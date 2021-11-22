var MergeBU = /** @class */ (function () {
    function MergeBU() {
        this.aux = [];
    }
    MergeBU.prototype.sort = function (a) {
        /*
            1. 自底向上
            2. 拿到最小数组, 两两, 三三合并
            3. 考虑最终条件
        */
        var N = a.length;
        // sz 是一个数组的长度单位
        // 每次遍历数组, 都应该基于 sz 来作为跨度, 每次 merge
        // 都需要用到两个数组 所以 应该以 sz + sz 做为 每次循环的跨度
        // 这个循环是设置 sz 的大小
        for (var sz = 1; sz < N; sz = sz + sz) {
            // 而sz是最小数组的大小, 所以lo仍然要求以两个最小数组为跨度
            // 这里可以理解为对数组的首次分割
            for (var lo = 0; lo < N - sz; lo += sz + sz) {
                // 这里的lo指的是 每个子数组的索引
                // merge内部对数组做了多一级分割
                this.merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
            }
        }
    };
    MergeBU.prototype.less = function (A, B) { return A - B > 0; /* 这里可能需要做区分 */ };
    // 交换
    MergeBU.prototype.exch = function (a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    };
    MergeBU.prototype.merge = function (a, lo, mid, hi) {
        var i = lo;
        var j = mid + 1;
        // 1. 将 a 复制到 aux
        for (var k = lo; k <= hi; k++)
            this.aux[k] = a[k];
        for (var k = lo; k <= hi; k++) {
            if (i > mid)
                a[k] = this.aux[j++];
            else if (j > hi)
                a[k] = this.aux[i++];
            else if (this.less(this.aux[i], this.aux[j]))
                a[k] = this.aux[j++];
            else
                a[k] = this.aux[i++];
        }
    };
    MergeBU.prototype.show = function (a) {
        for (var i = 0; i < a.length; i++)
            console.log(a[i] + '');
    };
    MergeBU.prototype.isSorted = function (a) {
        for (var i = 0; i < a.length; i++)
            return !!this.less(a[i], a[i - 1]);
    };
    return MergeBU;
}());
var arr = [10, 2, 3, 5, 7, 1];
var S2 = new MergeBU();
debugger;
S2.sort(arr);
console.log(arr);
