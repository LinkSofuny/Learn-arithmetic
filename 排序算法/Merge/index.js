var Merge = /** @class */ (function () {
    function Merge() {
        this.aux = [];
    }
    Merge.prototype.sort = function (a, lo, hi) {
        /*
            1. 确定中位数, 归并用
            2. 递归调用, 将数组分成两段
            3. 分到首位只有一位的时候结束
        */
        if (lo >= hi)
            return;
        var mid = Math.floor(lo + (hi - lo) / 2);
        this.sort(a, lo, mid);
        this.sort(a, mid + 1, hi);
        this.merge(a, lo, mid, hi);
    };
    Merge.prototype.less = function (A, B) { return A - B > 0; /* 这里可能需要做区分 */ };
    // 交换
    Merge.prototype.exch = function (a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    };
    Merge.prototype.merge = function (a, lo, mid, hi) {
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
    Merge.prototype.show = function (a) {
        for (var i = 0; i < a.length; i++)
            console.log(a[i] + '');
    };
    Merge.prototype.isSorted = function (a) {
        for (var i = 0; i < a.length; i++)
            return !!this.less(a[i], a[i - 1]);
    };
    return Merge;
}());
var arr = [10, 2, 3, 5, 7, 1];
var S1 = new Merge();
debugger;
S1.sort(arr, 0, arr.length - 1);
console.log(arr);
