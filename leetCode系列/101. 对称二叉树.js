/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var check = function(q, p) {
    if (!q && !p) return true
    if (!q || !p) return false
    return q.val === p.val && check(q.left, p.right) && check(q.right, p.left)
}
var isSymmetric = function(root) {
    return check(root, root)
};