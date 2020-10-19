//Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект,
// включающий только указанные свойства. Параметры:
// Исходный объект
// Массив имен свойств

import _ from 'lodash';

const pick = (obj, arr) => {
    let result = {};
    let entries = Object.entries(obj);
    for (const [key, value] of entries) {
        result = _.pick(obj, arr)
    }
    return result;
};

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

console.log(pick(data, ['user', 'os']));