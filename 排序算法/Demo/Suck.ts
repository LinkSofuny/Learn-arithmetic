function exch (nums: number[], k: number, j: number) {
    const t = nums[k]
    nums[k] = nums[j]
    nums[j] = t
}

function sink (nums: number[], k: number, N: number) {
    while (k * 2 <= N) {
        let j = k * 2 // 子节点  
        if (j < N && nums[j] < nums[j + 1]) j++
        if (nums[k] >= nums[j]) break;
        exch(nums, k, j)
        k = j
    }
}

function sortArray (nums: number[]) {
    let N  = nums.length - 1
    for(let i = Math.floor(N / 2); i >= 0; i--) {
        sink(nums, i, N) // 堆有序化
    } 
    while (N > 0) {
        exch(nums, 0, N--)
        sink(nums, 0, N)
    }
    return nums
}
