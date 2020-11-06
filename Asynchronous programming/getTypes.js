//Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует список переданных путей и
// возвращает массив (в промисе), с описанием того, что находится по каждому из путей.
// Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка,
// то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как
// минимум один путь для обработки (иначе придется задействовать механизм, который проходится в курсах далее).
// Примеры
// import { getTypes } from './file.js';
//
// getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// // ['directory', 'file', null]
// Подсказки
// fsPromises.stat - информация о файле или директории. Для проверки на директорию используйте метод isDirectory.
// Методы then и catch не меняют сам промис, а возвращают новый

import {promises as fs} from 'fs';

const initPromise = Promise.resolve([]);

const getTypes = (paths) => {
    return paths.reduce((acc, path) => {
        const newAcc = acc.then((contents) =>
            fs
                .stat(path)
                .then((stats) =>
                    stats.isDirectory()
                        ? contents.concat("directory")
                        : contents.concat("file")
                )
                .catch(() => contents.concat(null))
        );
        return newAcc;
    }, initPromise);
};

export {getTypes}