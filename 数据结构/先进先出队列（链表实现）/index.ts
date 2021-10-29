class __Node<T> {
  item: T
  next: __Node<T>
}
// 链表队列
class Queue<T> {
  private first: __Node<T>;
  private last: __Node<T> = {
    item: null,
    next: null
  };
  private N: number = 0

  public isEmpty(): boolean {
    return !this.first
  }
  public size(): number {
    return this.N
  }
  // 入队
  public enQueue (item: T) {
    const oldLast = this.last
    this.last = new __Node()
    this.last.item = item
    this.last.next = null
    if (this.isEmpty()) this.first = this.last
    else oldLast.next = this.last
    this.N++
  }
  // 处队
  public dequeue(): T {
    const item = this.first.item
    // 让第二个节点等于第一个节点
    this.first = this.first.next
    if (this.isEmpty()) this.last = null
    this.N--
    return item
  }
}

const queue = new Queue()
queue.enQueue('1')
queue.enQueue('2')
queue.enQueue('3')
queue.enQueue('4')
queue.enQueue('5')
queue.enQueue('6')
console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)

  
  