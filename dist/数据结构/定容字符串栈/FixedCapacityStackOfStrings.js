// 一种表示定容字符串栈的抽象数据类型
class FixedCapacityStackOfStrings {
    constructor(cap) {
        this.N = cap;
        this.a = new Array();
    }
    push(item) {
        if (this.isFull())
            this.resize(2 * this.a.length);
        this.N++;
        this.a[this.a.length] = item;
    }
    // 每次弹出元素数组都会递减, this.N 照理说是永远不会等于 this.a.length/4 ???
    pop() {
        if (this.N > 0 && this.N == this.a.length / 4)
            this.resize(this.a.length / 2);
        this.N--;
        return this.a.pop();
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
    resize(max) {
        let tamp = [];
        this.a.forEach((item, index) => {
            tamp[tamp.length] = item;
        });
        this.a = tamp;
        this.N = max;
    }
}
const F = new FixedCapacityStackOfStrings(5);
console.log(F);
console.log(F.push('1'));
console.log(F.push('2'));
console.log(F.push('3'));
console.log(F.push('4'));
console.log(F.push('5'));
console.log(F);
