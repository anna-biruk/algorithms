//Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение в виде двумерного массива
// и увеличивает его в два раза.

import _ from 'lodash';

const duplicate = (n) => {
    return [n, n]
};

const enlargeArrayImage = (arr) => {
    const result = _.flatMap(arr, duplicate)
    const finalResult = result.map(internalArray => {
        return _.flatMap(internalArray, duplicate);
    });
    return finalResult;
};


const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
];

// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********




