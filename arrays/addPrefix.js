//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс,
// и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс.
// Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел.

const addPrefix = (arr, prefix) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = `${prefix} ${arr[i]}`
    }
    return newArray;
};
const names = ['john', 'smith', 'karl'];

const newNames = addPrefix(names, 'Mr');
console.log(newNames);
