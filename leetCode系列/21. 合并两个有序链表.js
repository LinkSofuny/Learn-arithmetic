var mergeTwoLists = function(l1, l2) {
    /**
     *  递归法
     *  判断 两个链表当前节点的值 谁大谁小
     *  小的则 剪掉当前节点指向,  
     *  并且拿到下一个节点继续比较
     *  总而言之就是:
     *   两个有序链表作比较, 当前节点小的, 就剪掉指向, 然后往下一个进行比较, 直到指向空了, 则由后往前, 一个一个接回来
     */
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
