class _Selection<T> {
    public sort(arr: T[]) {
        //....
        const N = arr.length

        for (let i = 0; i < N; i++) {

            let min = i

            for (let j = i + 1; j < N; j++) {
                if (this.less(arr[min], arr[j]) > 0) min = j
            }

            this.exch(arr, i, min)
        }
    }

    public less(A: any, B: any): number { return A - B /* 这里可能需要做区分 */}
    // 交换
    public exch(arr: T[], i: number, j: number) {
        const t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }

    public show(arr: T[]) { for (let i = 0; i < arr.length; i++) console.log(arr[i] + '') }

    public isSorted(arr: T[]) { for (let i = 0; i < arr.length; i++)  return !!this.less(arr[i], arr[i - 1]) }
}
let arr = [1, 5, 6, 7, 8, 9, 10]
const S = new _Selection()
debugger
S.sort(arr)
console.log(arr);
