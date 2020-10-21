//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает
// сформированный query string из этих параметров:
// import bqs from '../buildQueryString.js';
// bqs({ per: 10, page: 1 });
// // page=1&per=10
// bqs({ param: 'all', param1: true });
// // param=all&param1=true
// Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать).

import _ from 'lodash';

const buildQueryString = (obj) => {
    let result = '';
    let toPairsArray = _.toPairs(obj);
    let orderedPairs = _.orderBy(toPairsArray, ['0'], ['asc']);
    for (let [key, value] of orderedPairs) {
        if (result.length === 0) {
            result = `${key}=${value}`;
        } else {
            result += `&${key}=${value}`;
        }
    }
    return result;
};