const less = (a: number, b: number): boolean => a < b;

let aux: number[] = [];

function mergeArr(nums: number[], lo: number, mid: number, hi: number) {
  let i = lo;
  let j = mid + 1;
  for (let k = lo; k <= hi; k++) aux[k] = nums[k]; // 复制一份
  for (let k = lo; k <= hi; k++) {
      if      (i > mid)              nums[k] = aux[j++]
      else if (j > hi)               nums[k] = aux[i++]
      else if (less(aux[i], aux[j])) nums[k] = aux[i++]
      else                           nums[k] = aux[j++]
  }
}

function sortArray(nums: number[], lo: number = 0, hi: number = nums.length - 1) {
  // 归并排序
  /**
   * 1. 取一个中位数
   * 2. 根据中位数分割数组
   * 3. 递归处理
   */
  if (lo >= hi) return
  let mid = Math.floor(lo + (hi - lo) / 2);
  sortArray(nums, lo, mid);
  sortArray(nums, mid + 1, hi);
  mergeArr(nums, lo, mid, hi);
  return nums;
}
