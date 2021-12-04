// 选择排序
const less = (a: number, b: number): boolean => a <= b;

const exch = (arr: number[], i: number, j: number) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

function sortArray(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (!less(nums[i], nums[j])) {
        exch(nums, i, j);
      }
    }
  }
  return nums;
}
