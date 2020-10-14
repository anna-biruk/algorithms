//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив интервалов и возвращает сумму всех
// длин интервалов. В данной задаче используются только интервалы целых чисел от -100 до 100 , которые представлены
// в виде массива. Первое значение интервала всегда будет меньше, чем второе значение. Например, длина интервала
// [-100, 0] равна 100, а длина интервала [5, 5] равна 0. Пересекающиеся интервалы должны учитываться только один раз.

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)

const checkIsIntersects = (interval, arr, currentIndex) => {
    let result = false;
    for (let k = 0; k < arr.length; k++) {
        if ((interval[0] <= arr[k][1] && interval[1] >= arr[k][0]) && currentIndex !== k) {
            result = true;
        }
        if (arr[k][0] < interval[0] && arr[k][1] > interval[1]) {
            result = true;
        }
    }

    return result;
};

const sumIntervals = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return arr[0][1] - arr[0][0];
    }
    let sum = 0;
    let min = 100;
    let max = -100;
    let shouldCountMinMax = false;
    for (let j = 0; j < arr.length; j++) {
        const isIntersects = checkIsIntersects(arr[j], arr, j);
        if (!isIntersects) {
            sum += arr[j][1] - arr[j][0];
            arr[j] = [];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            continue;
        }
        if (arr[i][0] < min) {
            min = arr[i][0]

        }
        if (arr[i][1] > max) {
            max = arr[i][1]
        }
        if (arr[i][1] > max || arr[i][0] < min || (min === arr[i][0] && max === arr[i][1])) {
            shouldCountMinMax = true;
        }
    }
    if (!shouldCountMinMax) {
        return sum;
    }
    return (max - min) + sum
};

export default sumIntervals;
// END
//Решение учителя
const sumIntervals = (intervals) => {
    const values = [];
    for (const [start, end] of intervals) {
        for (let i = start; i < end; i += 1) {
            if (!values.includes(i)) {
                values.push(i);
            }
        }
    }
    return values.length;
};

export default sumIntervals;