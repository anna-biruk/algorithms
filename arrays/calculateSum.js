//Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива,
// которые делятся без остатка на 3 (три).
//В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression).
const calculateSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            sum += arr[i]
        }
        if (arr === []) {
            return 0;
        }
    }
    return sum;
};
const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48
const coll2 = [];
calculateSum(coll2);