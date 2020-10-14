//Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов
// (без учёта повторяющихся символов) использовано в этой строке. Например, в строке yy используется всего
// один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !.

import _ from 'lodash';

const countUniqChars = (string) => {
    const repetitiveElement = [];

    for (const element of string) {
        if (string.includes(element)) {
            repetitiveElement.push(element)
        } else if (string === '') {
            return 0;
        }
    }
    const uniqe = _.uniq(repetitiveElement);
    return uniqe.length;
};

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2);

export default countUniqChars;