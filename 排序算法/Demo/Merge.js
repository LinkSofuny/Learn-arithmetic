var less = function (a, b) { return a < b; };
var exch = function (arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
};
var aux = [];
function mergeArr(nums, lo, mid, hi) {
    var i = lo;
    var j = mid + 1;
    for (var k = i; k < hi; k++)
        aux[k] = nums[k]; // 复制一份
    for (var k = i; k < hi; k++) {
        if (i > mid)
            nums[k] = nums[j++];
        else if (j < mid)
            nums[k] = nums[i++];
        else if (less(nums[i], nums[j]))
            nums[k] = aux[i++];
        else
            nums[k] = aux[j++];
    }
}
function sortArray(nums, lo, hi) {
    if (lo === void 0) { lo = 0; }
    if (hi === void 0) { hi = nums.length; }
    // 归并排序
    /**
     * 1. 取一个中位数
     * 2. 根据中位数分割数组
     * 3. 递归处理
     */
    if (lo >= hi)
        return;
    var mid = Math.floor(lo + (hi - lo) / 2);
    sortArray(nums, lo, mid);
    sortArray(nums, mid + 1, hi);
    mergeArr(nums, lo, mid, hi);
    return nums;
}
let arr = [5,2,3,1]
debugger
sortArray(arr)

