const Flower = require('../Flower');

class PQueue {
    constructor(){
        this._pQueue = new Array();
    }

    unshift(value, priority){ //add element on queue
        this._pQueue = [ {
            value,
            priority
        }, ...this._pQueue];
        this.sort();
    }

    shift(){ //delete max element from queue
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            this._pQueue = this._pQueue.slice(0, this._pQueue.length - 1);
        }
    }

    sort(){
        this._pQueue = [ ...this._pQueue].sort((a, b) => a.priority - b.priority);
         // if need the heap sort i will realization, but very difficult
    }

    getMax(){
        if (this.isEmpty()) {
            console.log('PQueue is empty');
            return;
        }
        return this._pQueue[this._pQueue.length - 1];
    }

    isEmpty(){
        return !this._pQueue.length;
    }

    printPQueue(){
        this._pQueue.forEach(it => console.log(it));
    }
}

const pQueue = new PQueue();
const count = 10;
for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, 20, 'pink');
    pQueue.unshift(flower, Math.floor(Math.random() * 100));
}

pQueue.printPQueue();

const maxPriority = pQueue.getMax();
console.log('Max priority element')
console.log(maxPriority);

console.log(`PQueue is empty ${pQueue.isEmpty() ? 'Yes' : 'No'}`);

for (let i = 0; i < count; i++) {
    pQueue.shift();
}

pQueue.printPQueue();


console.log(`PQueue is empty ${pQueue.isEmpty() ? 'Yes' : 'No'}`);