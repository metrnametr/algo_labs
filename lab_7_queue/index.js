/// JS Arrays has own methond shift and unshift, but i will realize custom methods

const Flower = require('../flowers');

class Queue {
    constructor(){
        this._queue = new Array();
    }

    unshift(value){ //add element on queue
        this._queue = [ value, ...this._queue];
    }

    shift(){ //delete element from queue
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            this._queue = this._queue.slice(1, this._queue.length);
        }
    }

    isEmpty(){
        return !this._queue.length;
    }

    printQueue(){
        this._queue.forEach(it => console.log(it));
    }
}

const queue = new Queue();
const count = 10;
for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, 20, 'pink');
    queue.unshift(flower)
}

queue.printQueue();


console.log(`Queue is empty ${queue.isEmpty() ? 'Yes' : 'No'}`);

for (let i = 0; i < count; i++) {
    queue.shift();
}

queue.printQueue();


console.log(`Queue is empty ${queue.isEmpty() ? 'Yes' : 'No'}`);