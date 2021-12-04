// 希尔排序
const less = (a: number, b: number): boolean => a <= b;

const exch = (arr: number[], i: number, j: number) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

function sortArray(nums: number[]) {
  const N = nums.length;
  let h = 1;
  while (h <= Math.floor(N / 3)) h = 3 * h + 1;

  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && less(nums[j - h], nums[j]); j -= h) {
        exch(nums, j, j - h);
      }
    }
    h = h / 3;
  }
}
