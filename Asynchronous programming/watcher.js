//Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла с заданной
// периодичностью. Функция должна возвращать идентификатор таймера, запущенного внутри.
// Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек.
// Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер и вызвать колбек,
// передав туда ошибку.
// Отслеживание изменений файла должно начинаться с момента вызова функции. Параметры функции:
// Путь до файла, который нужно отслеживать
// Период отслеживания
// Колбек, принимающий аргументом ошибку
// import watch from './watcher.js';
// const id = watch(filepath, 500, (err) => {
//   console.log('Wow!');
// });
//
// setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
// setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд
// Подсказки
// stats.mtimeMs — время последнего изменения
// Date.now() — текущая дата
// clearInterval

import fs from 'fs';

const watch = (filepath, time, cb) => {
    const check = (timerId) => {
        fs.stat(filepath, (err, stats) => {
            if (err) {
                clearInterval(timerId);
                cb(err);
                return;
            }
            if (Date.now() - stats.mtimeMs < time) {
                cb(null);
                return;
            }
        })
    };
    const timerId = setInterval(() => check(timerId), time);
    return timerId;
};