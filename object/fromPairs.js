//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив,
// состоящий из массивов-пар и возвращает объект, полученный из этих пар.
//Если при конструировании объекта попадаются совпадающие ключи, то берётся значение из последнего массива-пары:
// fromPairs([['cat', 5], ['dog', 6], ['cat', 11]])
// // { 'cat': 11, 'dog': 6 }

const fromPairs = (arr) => {
    let result = {};

    arr.forEach(element => {
        const [key, value] = element;
        result[key] = value;
    });
    return result;
};

export default fromPairs;