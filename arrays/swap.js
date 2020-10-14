//Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива.
// Если массив содержит меньше двух элементов, то он возвращается как есть.

const swap = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];
    const elements = arr.slice(1, arr.length - 1);
    return [lastElement, ...elements, firstElement];
};
console.log(swap([1, 2]));