const less = (a: number, b: number): boolean => a < b;

const exch = (arr: number[], i: number, j: number) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

function random (arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr
}
[1, 2, 3, 4 ,5]
function partition (nums: number[], lo: number, hi: number) {
    /**
     * 1. 选一个比较值
     * 2. 左右指针都与选定值比较, 如果符合条件, 左右指针向前推进
     * 3. 最后 将 j 值与比较值对调, 返回j
     */
    let i: number = lo                              // 0
    let j: number = hi + 1// 这里为什么要 + 1 ?🤔     // 5
    const v: number = nums[lo]
    while(true) {
        /**
         * 1. 为什么是 ++i 而不是 i++ ?? 🤔 因为0号位我们已经用来当做切分元素了
         */
        while (less(nums[++i], v)) if (i === hi) break;
        while (less(v, nums[--j])) if (j === lo) break;
        if(i >= j) break;
        exch(nums, i, j)
    }
    exch(nums, lo, j)
    return j
}
let flag = true
function sortArray (nums: number[], lo: number = 0, hi: number = nums.length - 1) {
    /**
     * 1. 将数组随机打乱
     * 2. 考虑边界
     * 3. 寻找一个合适的切分点, 同时排序
     * 4. 基于这个点递归
     *  */
    if (lo >= hi) return nums
    if (flag) {
        flag = false
        nums = random(nums)
    } 

    let j = partition(nums, lo, hi)
    sortArray(nums, lo, j - 1)
    sortArray(nums, j + 1, hi)
    return nums
}