function less(arr, i, j) {
    return arr[i] < arr[j];
}
function exch(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
function sink(arr, k, N) {
    while (k * 2 <= N) {
        var j = k * 2; // 子节点
        if (j < N && less(arr, j, j + 1))
            j++;
        if (!less(arr, k, j))
            break;
        exch(arr, k, j);
        k = j;
    }
}
function sortArray(arr) {
    var N = arr.length - 1;
    // 堆有序化
    for (var k = Math.floor(N / 2); k >= 0; k--) {
        sink(arr, k, N);
    }
    while (N >= 1) {
        exch(arr, 0, N--);
        sink(arr, 0, N);
    }
    return arr;
}
var arr = [5, 2, 3, 1];
debugger;
console.log(sortArray(arr));
