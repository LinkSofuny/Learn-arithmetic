function exch(nums, k, j) {
    var t = nums[k];
    nums[k] = nums[j];
    nums[j] = t;
}
function sink(nums, k, N) {
    while (k * 2 <= N) {
        var j = k * 2; // 子节点  
        if (j < N && nums[j] < nums[j + 1])
            j++;
        if (nums[k] > nums[j])
            break;
        exch(nums, k, j);
        k = j;
    }
}
function sortArray(nums) {
    var N = nums.length - 1;
    for (var i = Math.floor(N / 2); i >= 0; i--) {
        sink(nums, i, N); // 堆有序化
    }
    while (N > 0) {
        exch(nums, 0, N--);
        sink(nums, 0, N);
    }
    return nums;
}
var arr = [5, 2, 3, 1];
debugger;
console.log(sortArray(arr));
