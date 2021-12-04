const less = (a: number, b: number): boolean => a < b;

const exch = (arr: number[], i: number, j: number) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

let aux: number[] = [];

function mergeArr(nums: number[], lo: number, mid: number, hi: number) {
  let i = lo;
  let j = mid + 1;
  for (let k = i; k < hi; k++) aux[k] = nums[k]; // 复制一份
  for (let k = i; k < hi; k++) {
      if (i >) {}
      else if () {}
      else if (less(nums[i], nums[j])) nums[k] = aux[i++]
      else nums[k] = aux[j++]
  }
}

function sortArray(nums: number[], lo: number = 0, hi: number = nums.length) {
  // 归并排序
  /**
   * 1. 取一个中位数
   * 2. 根据中位数分割数组
   * 3. 递归处理
   */
  let mid = Math.floor(lo + (hi - lo) / 2);
  sortArray(nums, lo, mid);
  sortArray(nums, mid + 1, hi);
  mergeArr(nums, lo, mid, hi);
  return nums;
}
