//Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его:
// если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.
// В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

function flatten(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}


const res = flatten([1, [[3], [2]], 9]);
console.log(res);
export {flatten};