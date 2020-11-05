//printer.js
// Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.
// Примеры:
// import print from './printer.js';
// print('./myfile');

import fs from 'fs';

const print = (file) => {
    fs.readFile(file, 'utf-8', function (err, content) {
        if (err) {
            return console.log(err)
        }
        console.log(content)
    })
};
export default print;