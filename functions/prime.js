//еализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту
// и печатает на экран yes или no.
// Примеры
// sayPrimeOrNot(5); // 'yes'
// sayPrimeOrNot(4); // 'no'
// Подсказки
// Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
// Для этого выделите процесс определения того, является ли число простым, в отдельную функцию,
// возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода,
// интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).
// Пример такого разделения и хороших абстракций — в решении учителя.

const isPrime = (number) => {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            return false;
        }
    return number > 1;
};

const sayPrimeOrNot = (num) => {
    if (isPrime(num) === true) {
        console.log('yes');
    } else if (isPrime(num) === false) {
        console.log('no');
    }
};

export default sayPrimeOrNot;