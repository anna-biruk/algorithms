//Реализуйте функцию square(), которая возвращает квадрат числа.
// Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
// Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.


const square = (num) => {
    return num * num;
};

const sumOfSquares = (a, b) => {
    return square(a) + square(b)
};

const squareSumOfSquares = (a, b) => {
    return sumOfSquares(a, b) ** 2;
};

// END

