//Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра:
// набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово.
// В результате вызова функция возвращает true или false.
// При проверке учитывается количество символов, нужных для составления слова, и не учитывается их регистр.

const scrabble = (str, word) => {
    let result = '';
    let lowerCaseWorld = word.toLowerCase();
    for (let i of lowerCaseWorld) {
        if (str.includes(i)) {
            result += i;
            str = str.replace(i, '');
        }
    }
    if (result.length === lowerCaseWorld.length) {
        return true
    } else {
        return false
    }
};