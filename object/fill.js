//Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному
// списку ключей. Параметры:
// Исходный объект
// Список ключей которые нужно заменить
// Данные, которые нужно сливать в исходный объект
// В случае, когда список ключей пустой, нужно сливать все данные полностью.

import _ from 'lodash';

const fill = (obj1, arr, obj2) => {
    let value = obj1;

    if (arr.length === 0) {
        return Object.assign(obj1, obj2);
    }
    for (let key of arr) {
        if (_.has(value, key)) {
            value[key] = obj2[key];
        }

    }

    return value;
};

