class _Node {
}
// 链表下压栈
class Stack {
    constructor() {
        this.N = 0;
    }
    isEmpty() {
        return this.first === null;
    }
    size() {
        return this.N;
    }
    // 栈顶推入节点
    push(item) {
        const oldFirst = this.first;
        this.first = new _Node();
        this.first.item = item;
        this.first.next = oldFirst;
        this.N++;
    }
    // 弹出节点
    pop() {
        const item = this.first.item;
        this.first = this.first.next;
        this.N--;
        return this.first;
    }
}
const S = new Stack();
S.push('first');
S.push('second');
console.log(S);
console.log('弹出', S.pop());
console.log(S);
S.push('three');
console.log(S);
