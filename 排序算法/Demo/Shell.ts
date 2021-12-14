// 希尔排序
const less = (a: number, b: number): boolean => a <= b;

const exch = (arr: number[], i: number, j: number) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

function sortArray(nums: number[]) {
  /*
    1. 给定一个用于跨越的(分割的key)
    2, 基于这个 key 对数组分割进行跨度更大的交换
  */
  const N = nums.length;
  // 为什么要基于这个公式确定跨度?
  let h = 1;
  while (h <= Math.floor(N / 3)) h = 3 * h + 1;

  while (h >= 1) {
    // 逐渐缩小跨度
    for (let i = h; i < N; i++) {
      // 这层循环递增 i 在 h 的基础上
      for (let j = i; j >= h && less(nums[j], nums[j - h]); j -= h) {
        exch(nums, j, j - h);
      }
    }
    h = Math.floor(h / 3);
  }
  return nums;
}
