const floor = (val: number): number => Math.floor(val)

class Shell<T> {
    public sort(arr: T[]) {
        //....
        const N = arr.length
        let h = 1
        while (h < floor(N / 3)) h = 3 * h + 1
        debugger
        while (h >= 1) {
            for (let i = h; i < N; i++) {

                for (let j = i; j >= h && this.less(arr[j], arr[j - h]); j -= h) {
                    this.exch(arr, j - h, j)
                }
            }
            h = floor(h / 3)
        }
        
    }

    public less(A: any, B: any): boolean { return A - B < 0/* 这里可能需要做区分 */}
    // 交换
    public exch(arr: T[], i: number, j: number) {
        const t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }

    public show(arr: T[]) { 
        for (let i = 0; i < arr.length; i++) 
            console.log(arr[i] + '') 
    }

    public isSorted(arr: T[]) { 
        for (let i = 0; i < arr.length; i++)  
            return !!this.less(arr[i], arr[i - 1]) 
    }
}
let arr = [10, 2, 3, 5, 7, 1, 6, 20, 30, 40, 67, 70]
const S = new Shell()
debugger
S.sort(arr)
console.log(arr);
