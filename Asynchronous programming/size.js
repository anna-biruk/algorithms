//Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории
// (не включая поддиректории). Анализ размера файла должен происходить параллельно,
// для этого воспользуйтесь библиотекой async
// Примеры
// import { getDirectorySize } from './info.js';
// getDirectorySize('/usr/local/bin', (err, size) => {
//   console.log(size);
// });
// Подсказки
// fs.readdir() - чтение содержимого директории
// path.join() - конструирует пути
// async.map()
// fs.stat() - информация о файле
// _.sumBy() - нахождение суммы в массиве

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getDirectorySize = (sourcePath, cb) => {
    fs.readdir(sourcePath, (err1, filesNames) => {
        if (err1) {
            cb(err1);
            return;
        }
        const filePaths = filesNames.map((fileName) =>
            path.join(sourcePath, fileName)
        );
        async.map(filePaths, fs.stat, (err2, stats) => {
            if (err2) {
                cb(err2);
                return;
            }
            const files = stats.filter((stats) => stats.isFile());
            const sizes = files.map((file) => file.size);
            cb(null, _.sumBy(sizes));
        });
    });
};