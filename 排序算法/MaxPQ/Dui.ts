function less(arr: number[], i: any, j: any):boolean { 
    return arr[i] < arr[j] /* 这里可能需要做区分 */
}
// 交换
function exch(arr: number[], i: number, j: number) {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

function sink (arr: number[], k: number, N: number) {
    // k * 2 为 子节点 k * 2 ++ 临近子兄弟节点, 我们只取最大的并作比较
    while ( k * 2 <= N) {
        let j = k * 2 // 子节点 2
        if (j < N && less(arr, j, j + 1)) j++
        if (!less(arr, k, j)) break;
        exch(arr, k, j)
        k = j
    }
}

let arr = [-2, 3, -5]
/**
 * 堆排序
 * 1. 将数组排成 堆有序的二叉树
 *  1). 如何堆有序?
 *       1]. 可以从左至右 让每个节点都与子节点作比较, 尝试上浮
 *       2].也可以从右至左, 将每个子节点作为树的根节点, 
*           将这个节点与子节点作比较尝试下沉 
 * 2. 将首节点与末节点交换, 从倒数第二位开始重新 堆有序化
 * 3. 以此类推
*/
function sort (arr: number[]) {
    let N = arr.length - 1
    // 堆有序化
    for (let k = Math.floor( N / 2 ); k >= 0; k--) {
        sink(arr, k, N)
    }
    while (N >= 1) {
        exch(arr, 0, N--)
        sink(arr, 0, N)
    }
    
    return arr
}
console.log(sort(arr))