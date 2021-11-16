class Counter {
    constructor(id) {
        this.name = id;
        this.count = 0;
    }
    increment() {
        this.count++;
    }
    tally() {
        return this.count;
    }
    toString() {
        return this.count + '' + this.name;
    }
}
const demo = new Counter('heads');
demo.increment();
demo.increment();
demo.increment();
demo.increment();
console.log('demo', demo + '');
