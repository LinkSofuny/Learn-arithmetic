/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
var removeNthFromEnd = function(head, n) {
    if (!head) return head
    if (head.next === null && n === 1) {
        return null
    }
    let length = 1
    let node = head
    // 拿到链表长度
    while(node) {
        node = node.next
        node && length++
    }
    // 需要删除的目标点
    // 5 - 2  => 前节点 
    let aimCount = length - n,
    pre
    node = head
    while(aimCount > -1) {
        if (!aimCount) {
            if (pre) {
                node.next = node.next.next
            } else {
                head = node.next
            }
        } else {
            pre = node
            node = node.next
        }
        aimCount--
    }
    return head
};

removeNthFromEnd(head, 2)