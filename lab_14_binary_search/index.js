const Flower = require('../Flower');

const flowerArray = [];
const count = 11;

for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, i + 1, 'pink'); 
    flowerArray.push(flower);
}



const sortFlowerArray = [...flowerArray].sort((a, b) => a.cost - b.cost);


function findElementCost(array, cost) {
    const idx = Math.floor(array.length / 2);
    console.log(array)
    if (array.length <= 0) {
        console.log('Not found');
        return null;
    }
    if (array[idx].cost < cost) {
        array = array.slice(idx + 1, array.length)
    } else if (array[idx].cost > cost) {
        array = array.slice(0, idx)
    } else {
        return array[idx]
    }
    return findElementCost(array, cost);
}

console.log('Sort cost')
sortFlowerArray.forEach(it => console.log(it))

const findCost = 12;



const findElement = findElementCost(sortFlowerArray, findCost);
console.log(findElement)