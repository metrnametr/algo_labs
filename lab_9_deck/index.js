/// JS Arrays has own methond shift and unshift, pop and push, but i will realize custom methods

const Flower = require('../flowers');

class Deck {
    constructor(){
        this._deck = new Array();
    }

    unshift(value){ //add element begin on deck
        this._deck = [ value, ...this._deck];
    }

    shift(){ //delete element from deck
        if (this.isEmpty()) {
            console.log('deck is empty');
        } else {
            const element = this._deck[0];
            this._deck = this._deck.slice(1, this._deck.length);
            return element;
        }
    }

    push(value){ //add element on the end
        this._deck = [ ...this._deck, value];
    }

    pop(){ // delete element from the end
        if (this.isEmpty()) {
            console.log('Stack is empty');
        } else {
            const element = this._deck[this._deck.length - 1];
            this._deck = this._deck.slice(0, this._deck.length - 1);
            return element;
        }
    }

    isEmpty(){
        return !this._deck.length;
    }

    printDeck(){
        this._deck.forEach(it => console.log(it));
    }
}

const deck = new Deck();
const count = 10;
for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, 20, 'pink');
    deck.unshift(flower)
}

deck.printDeck();


console.log(`deck is empty ${deck.isEmpty() ? 'Yes' : 'No'}`);

console.log(`Delete element from begining ${deck.shift().name}`)
console.log(`Delete element from end ${deck.pop().name}`)

for (let i = 0; i < count - 2; i++) {
    deck.shift();
}

deck.printDeck();


console.log(`deck is empty ${deck.isEmpty() ? 'Yes' : 'No'}`);