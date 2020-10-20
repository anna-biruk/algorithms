//Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
// Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.
//Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.
// Если значением какого-то свойства является объект, то нужно рекурсивно запустить функцию cloneDeep(value).


import _ from 'lodash';

const cloneDeep = (data) => {
    let clone = _.cloneDeep(data);
    return clone;
};

const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

// result имеет такую же структуру как и data
const result = cloneDeep(data);
console.log(cloneDeep(result));
console.log(result.key2 !== data.key2);//true
console.log(result.key2.innerKey !== data.key2.innerKey);//true