class _Node<T> {
  item: T
  next: _Node<T>
}
// 链表下压栈
class Stack<T> {
  private first: _Node<T>;
  private N: number = 0

  public isEmpty(): boolean {
    return this.first === null
  }
  public size(): number {
    return this.N
  }
  // 栈顶推入节点
  public push (item: T) {
    const oldFirst = this.first
    this.first = new _Node()
    this.first.item = item
    this.first.next = oldFirst
    this.N++
  }
  // 弹出节点
  public pop(): _Node<T> {
    const item = this.first.item
    this.first = this.first.next
    this.N--
    return this.first
  }
}

// const S = new Stack()
// S.push('first')
// S.push('second')
// console.log(S)
// console.log('弹出', S.pop())
// console.log(S)
// S.push('three')
// console.log(S)

