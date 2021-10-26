// 一种表示定容字符串栈的抽象数据类型
class FixedCapacityStackOfStrings {
    constructor(cap) {
        this.N = cap;
        this.a = [];
    }
    push(item) {
        if (this.isFull())
            return;
        this.a[this.a.length] = item;
    }
    pop() {
        // if (this.N > 0 && this.N == this.a.length/4) resize(a.length/2);
        return this.a.length--;
    }
    isEmpty() {
        return !this.a.length;
    }
    isFull() {
        return this.a.length >= this.N;
    }
    size() {
        return this.a.length;
    }
}
const F = new FixedCapacityStackOfStrings(5);
console.log(F);
console.log(F.push('1'));
console.log(F.push('2'));
console.log(F.push('3'));
console.log(F.push('4'));
console.log(F.push('5'));
console.log(F.pop());
console.log(F.pop());
console.log(F.pop());
console.log(F.push('6'));
console.log(F.push('7'));
console.log(F.pop());
console.log(F);
