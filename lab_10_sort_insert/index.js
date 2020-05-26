const Flower = require('../Flower');

const flowerArray = [];
const count = 10;

for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, Math.floor(Math.random() * 100) + 2, 'pink'); //random cost
    flowerArray.push(flower);
}


function sortIsert(array, property) {
    for (let i = 1; i < array.length; i++) {
        let choice = array[i];
        for (let j = i; j >= 0; j--) {
            if (array[j][property] < choice[property]) {
                array[j + 1] = array[j];
            }
        }
    }
    return array;
}

const sortFlowerArray = sortIsert(flowerArray, 'cost');

sortFlowerArray.forEach(it => console.log(it))


