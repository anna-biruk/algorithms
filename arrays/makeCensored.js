//Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении
// на последовательность $#%! и возвращает полученную строку. Аргументы: Текст, Набор стоп слов
// Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

const makeCensored = (text, stopWords) => {
    const resultArray = [];
    const words = text.split(' ');
    for (const word of words) {
        if (stopWords.includes(word)) {
            resultArray.push('$#%!');
        } else {
            resultArray.push(word);
        }
    }
    return resultArray.join(' ');
};

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
console.log(result2);