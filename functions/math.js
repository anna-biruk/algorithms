//Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое всех переданных аргументов.
// Если функции не передать ни одного аргумента, то она должна вернуть null.
//average(0); // 0
// average(0, 10); // 5
// average(-3, 4, 2, 10); // 3.25
// average(); // null

const average = (...numbers) => {
    let result = 0;
    if (numbers.length === 0) {
        return null;
    }
    for (let i of numbers) {
        result += i;
    }
    return result / numbers.length;
};
