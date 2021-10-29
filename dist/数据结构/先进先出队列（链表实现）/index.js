class __Node {
}
// 链表队列
class Queue {
    constructor() {
        this.last = {
            item: null,
            next: null
        };
        this.N = 0;
    }
    isEmpty() {
        return !this.first;
    }
    size() {
        return this.N;
    }
    // 入队
    enQueue(item) {
        const oldLast = this.last;
        this.last = new __Node();
        this.last.item = item;
        this.last.next = null;
        if (this.isEmpty())
            this.first = this.last;
        else
            oldLast.next = this.last;
        this.N++;
    }
    // 处队
    dequeue() {
        const item = this.first.item;
        // 让第二个节点等于第一个节点
        this.first = this.first.next;
        if (this.isEmpty())
            this.last = null;
        this.N--;
        return item;
    }
}
const queue = new Queue();
queue.enQueue('1');
queue.enQueue('2');
queue.enQueue('3');
queue.enQueue('4');
queue.enQueue('5');
queue.enQueue('6');
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
