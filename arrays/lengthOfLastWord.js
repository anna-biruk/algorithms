//Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки.
// Словом считается любая последовательность, не содержащая пробелов.
const lengthOfLastWord = (str) => {
    if (str === '') {
        return 0;
    }
    str = str.trim();
    let strLength = 0;
    let result = str.split(' ');
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] !== "") {
            strLength = strLength + result[i].length;
            return strLength;
        }
    }
};
export default lengthOfLastWord;