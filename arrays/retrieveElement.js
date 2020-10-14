//Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу,
// если индекс существует, либо возвращает значение по умолчанию.
// Функция принимает на вход три аргумента:Массив, Индекс, Значение по умолчанию (равно null);
const retrieveElement = (arr, index, defaultValue = null) => {
    if (arr[index] !== undefined) {
        return arr[index];
    }
    return defaultValue;
};

export default retrieveElement;