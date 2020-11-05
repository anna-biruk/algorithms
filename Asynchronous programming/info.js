//Реализуйте и экспортируйте асинхронную функцию compareFileSizes(), которая сравнивает размеры двух файлов.
// Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.
// import { compareFileSizes } from './info.js';
// compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));
// Подсказка
// Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
// Math.sign

import fs from 'fs';

const compareFileSizes = (filePathOne, filePathTwo, cb) => {
    fs.stat(filePathOne, (_error1, stats1) => {
        fs.stat(filePathTwo, (_error2, stats2) => {
            const result = Math.sign(stats1.size - stats2.size);
            cb(null, result);
        });
    });
};

export {compareFileSizes};