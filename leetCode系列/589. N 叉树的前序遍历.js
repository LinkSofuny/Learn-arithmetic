/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 *  Node {
        val: 1,
        children: [
            Node { val: 3, children: [Array] },
            Node { val: 2, children: [] },
            Node { val: 4, children: [] }
        ]
    }
 */
// ans 提出来节省内存
function preorder(root) {
    if (!root) return []
    let ans = []
    ans.push(root.val)
    if (root.children.length) {
        root.children.forEach(item => {
            // console.log(preorder(item))
            ans = ans.concat(preorder(item))
        })
    }
    return ans
}
preorder(root)