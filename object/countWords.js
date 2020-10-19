//Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении и возвращает объект
// в котором свойства это слова (приведенные к нижнему регистру), а значения — это то сколько раз слово встретилось
// в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в
// нижний регистр, чтобы не пропускались дубли.


import _ from 'lodash';

const countWords = (text) => {
    let result = {};
    let textArray = _.words(text);
    for (const item of textArray) {
        let lowerCaseItem = item.toLowerCase();
        if (_.has(result, lowerCaseItem)) {
            result[lowerCaseItem] += 1;
        } else {
            result[lowerCaseItem] = 1;
        }
    }
    return result;
};

const text1 = 'another one sentence with strange Words words';
console.log(countWords(text1));