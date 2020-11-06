//Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует.
//
// import { touch } from './file.js';
//
// touch('/myfile').then(() => console.log('created!'));
// Подсказка
// fsPromises.access — проверка существования файла

import { promises as fs } from 'fs';


const touch = (filepath) =>
    fs.access(filepath).catch(() => fs.writeFile(filepath, ""));


export {touch};