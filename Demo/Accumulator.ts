class Accumulaor<T> {
    private N;
    private total;
    constructor(N: Number) {
        this.N = N
        this.total = 0
    }
    public addDataValue(val: Number): void {
        this.N++
        this.total += val
    }
    public mean(): Number {
        return this.total / this.N
    }
    public toString(): String {
        return this.total + '' + this.N
    }

}

const A = new Accumulaor(0)
console.time();
for (let index = 0; index < 1000000000; index++) {
    A.addDataValue(Math.random())    
}
console.timeEnd();
console.log(A);
