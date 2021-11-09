class BinarySearch {
    public rank (key: number, array: number[]) {
        let lo = 0 // first
        let hi = array.length - 1 // last

        while (lo <= hi) {
            let mid = Math.floor(lo + (hi - lo) / 2)
            if (key < array[mid]) hi = mid - 1
            else if ( key > array[mid] )  lo = mid + 1
            else return mid
        }
        return -1
    }
}

let arr: number[] = [1,2,3,4,5,6]
const rank = (new BinarySearch()).rank
console.log(rank(6, arr))