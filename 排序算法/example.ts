class Example<T> {
    public sort(arr: T[]) {
        //....
    }

    public less(A: any, B: any):boolean { return A - B < 0 /* 这里可能需要做区分 */}
    // 交换
    public exch(arr: T[], i: number, j: number) {
        const t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }

    public show(arr: T[]) { for (let i = 0; i < arr.length; i++) console.log(arr[i] + '') }

    public isSorted(arr: T[]) { for (let i = 0; i < arr.length; i++)  return !!this.less(arr[i], arr[i - 1]) }
}