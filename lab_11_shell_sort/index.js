const Flower = require('../Flower');

const flowerArray = [];
const count = 10;

for (let i = 0; i < count; i++) {
    const flower = new Flower('Pion', 'Nederland', 1.5, Math.floor(Math.random() * 100) + 2, 'pink'); //random cost
    flowerArray.push(flower);
}

const sortShell = (array, property) => {
    const l = array.length;
    let step = Math.floor(l / 2);
    // look like isert sort, but very difficult. 
    // var step -> 1
    while (step >= 1) {
        for (let i = step; i < l; i++) {
            const current = array[i];
            let j = i;
            while (j > 0 && array[j - step] && array[j - step][property] > current[property]) {
                array[j] = array[j - step];
                j -= step;
            }
            array[j] = current;
        }
        step = Math.floor(step / 2);
    }
    return array;
};

const sortFlowerArray = sortShell(flowerArray, 'cost');

sortFlowerArray.forEach(it => console.log(it))


