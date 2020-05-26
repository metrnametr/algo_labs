/// JS Arrays has own methond push and pop, but i will realize custom method

const Flower = require('../flowers');

class Stack {
    constructor(){
        this._stack = new Array();
    }

    push(value){
        this._stack = [ ...this._stack, value];
    }

    pop(){
        if (this.isEmpty()) {
            console.log('Stack is empty');
        } else {
            this._stack = this._stack.slice(0, this._stack.length - 1);
        }
    }

    isEmpty(){
        return !this._stack.length;
    }

    printStack(){
        this._stack.forEach(it => console.log(it));
    }
}

const stack = new Stack();
const count = 10;
for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, 20, 'pink');
    stack.push(flower)
}

stack.printStack();


console.log(`Stack is empty ${stack.isEmpty() ? 'Yes' : 'No'}`);

for (let i = 0; i < count; i++) {
    stack.pop();
}

stack.printStack();


console.log(`Stack is empty ${stack.isEmpty() ? 'Yes' : 'No'}`);