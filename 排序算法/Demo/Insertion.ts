const less = (a: number, b: number): boolean => a < b;

const exch = (arr: number[], i: number, j: number) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

function sortArray(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0 && less(nums[j], nums[j - 1]); j--) {
      exch(nums, j, j - 1);
    }
  }
  return nums;
}
