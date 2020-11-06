//Реализуйте и экспортируйте асинхронную функцию reverse(), которая изменяет порядок расположения строк в файле на обратный.
//
// import { reverse } from './file.js';
//
// // До
// // one
// // two
// reverse(filepath);
//
// // После
// // two
// // one

import {promises as fs} from 'fs';

const reverse = (src) => {
    return fs
        .readFile(src, "utf-8")
        .then((data1) => data1.split("\n").reverse().join("\n"))
        .then((data2) => fs.writeFile(src, data2));
};

export {reverse};