/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if (!head) return head
    let vHead = cur =  new ListNode(0, head)
    while(vHead.next) {
        if (vHead.next.val === val) {
            vHead.next = vHead.next.next
            continue;
        }
        vHead = vHead.next
    }
    return cur.next
};
/**
 * 这里最大的失误在于 我们是要判断下一个节点是否存在
 * 所以循环应该判断下一个节点是否存在.
 * 删除下一个节点 考虑到第一个节点的情况 其实就需要一个虚拟表头, 还有一个移动指针
 * 这里要返回的事虚拟表头的下一个, 而不是移动指针的 一定要区分这一点
 */