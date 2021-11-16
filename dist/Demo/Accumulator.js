class Accumulaor {
    constructor(N) {
        this.N = N;
        this.total = 0;
    }
    addDataValue(val) {
        this.N++;
        this.total += val;
    }
    mean() {
        return this.total / this.N;
    }
    toString() {
        return this.total + '' + this.N;
    }
}
const A = new Accumulaor(0);
console.time();
for (let index = 0; index < 1000000000; index++) {
    A.addDataValue(Math.random());
}
console.timeEnd();
console.log(A);
