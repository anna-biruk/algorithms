//Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного
// массива.
//В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression)

const calculateAverage = (arr) => {
    let sum = 0;
    if (!arr.length) {
        return null;
    }
    for (let value of arr) {
        sum += value;
    }
    return sum / arr.length;
};
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
calculateAverage(temperatures1);