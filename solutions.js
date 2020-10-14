//Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
//
// Пример
// solution('hello, world!'); // Hello, World!
// Подсказки
// Вычисление длины строки: length(str).
// Перевод строки/буквы в верхний регистр: toUpperCase(str).


const solution = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const bigLetter = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
        result += bigLetter ? toUpperCase(str[i]) : str[i];
    }
    return result;
};

export default solution;