class Counter {
    private name;
    private count;
    constructor(id: String) {
        this.name = id
        this.count = 0
    }
    public increment():void {
        this.count++
    }
    public tally(): number {
        return this.count
    }
    public toString(): string {
        return this.count + '' + this.name
    }
}

const demo = new Counter('heads')

demo.increment()
demo.increment()
demo.increment()
demo.increment()
console.log('demo', demo + '');
