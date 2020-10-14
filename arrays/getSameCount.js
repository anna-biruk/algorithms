//Реализуйте и экспортируйте по умолчанию функцию принимающую на вход два массива и возвращающую количество
// общих уникальных значений в обоих массивах.
//
// Примеры:
// // Общие повторяющиеся элементы: 1, 3, 2
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3


import _ from 'lodash';

const getSameCount = (arr1, arr2) => {
    const repetitiveElement = [];

    arr1.forEach(element => {
        if (arr2.includes(element)) {
            repetitiveElement.push(element)
        }
    });

    const uniqe = _.uniq(repetitiveElement);
    return uniqe.length;
};

