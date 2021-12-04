function less(arr: number[], i: any, j: any): boolean {
  return arr[i] < arr[j];
}

function exch(arr: number[], i: number, j: number) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function sink(arr: number[], k: number, N: number) {
  while (k * 2 <= N) {
    let j = k * 2; // 子节点
    if (j < N && less(arr, j, j + 1)) j++;
    if (!less(arr, k, j)) break;
    exch(arr, k, j);
    k = j;
  }
}

function sortArray(arr: number[]) {
  let N = arr.length - 1;
  // 堆有序化
  for (let k = Math.floor(N / 2); k >= 0; k--) {
    sink(arr, k, N);
  }
  while (N >= 1) {
    exch(arr, 0, N--);
    sink(arr, 0, N);
  }

  return arr;
}
