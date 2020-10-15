//Вес Хэмминга — это количество единиц в двоичном представлении числа.
// Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.
// Примеры
// hammingWeight(0); // 0
// hammingWeight(4); // 1
// hammingWeight(101); // 4

const hammingWeight = (weight) => {
    let newWeight = 0;
    let binaryRepresentation = parseInt(weight).toString(2);
    let characterArray = binaryRepresentation.split('');

    for (let i = 0; i < characterArray.length; i++) {
        if (characterArray[i] === '1') {
            newWeight += 1
        }
    }
    return newWeight;
};