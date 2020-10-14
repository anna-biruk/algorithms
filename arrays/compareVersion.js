//Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает переданные версии version1 и version2.
// Если version1 > version2, то функция должна вернуть 1, если version1 < version2, то - -1,
// если же version1 = version2, то - 0.
// Версия - это строка, в которой два числа (мажорная и минорные версии) разделены точкой, например: 12.11.
// Важно понимать, что версия - это не число с плавающей точкой, а несколько чисел не связанных между собой.
// Проверка на больше/меньше производится сравнением каждого числа независимо. Поэтому версия 0.12 больше версии 0.2.


const compareVersion = (a, b) => {
    let v1 = a.split('.');
    let v2 = b.split('.');
    let i = 0;
    let la = v1.length, lb = v2.length;
    if (la > lb) {
        v2.push(0);
        lb++;
    }
    if (la < lb) {
        v1.push(0);
        la++;
    }
    while (i < la && i < lb) {
        let ai = parseInt(v1[i], 10);
        let bi = parseInt(v2[i], 10);
        if (ai > bi) {
            return 1;
        } else if (ai < bi) {
            return -1;
        }
        i++;
    }
    return 0;
};
console.log(compareVersion('0.2', '0.12'))