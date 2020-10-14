//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами
// и название валюты и возвращает сумму денег указанной валюты.
// Реализуйте данную функцию используя управляющие инструкции.
// Параметры функции:
// Массив, содержащий купюры разных валют с различными номиналами
// Наименование валюты


function getTotalAmount(arr, currency) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const currencyName = arr[i].slice(4);
        const cashNum = Number(currencyName);
        if (currency === arr[i].slice(0, 3)) {
            sum += cashNum;
        }
    }
    return sum;
}

const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') ;