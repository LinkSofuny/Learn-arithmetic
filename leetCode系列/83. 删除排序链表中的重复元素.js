/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 双指针查重
 */
 var deleteDuplicates = function(head) {
    let slow = head
    let fast = head.next
    do {
        if (slow.val !== fast.val) {
            slow.next = fast
            slow = slow.next
        }
        fast = fast.next
        if (!fast) slow.next = null
    } while(fast)
    return head
};
// 实际上完全没有必要双指针
var deleteDuplicates = function(head) {
    if (!head) return head
    let cur = head
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};

deleteDuplicates(head)