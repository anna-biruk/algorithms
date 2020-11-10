//В программировании, для некоторых задач распространены key-value базы данных. Внешне они работают
// по принципу ассоциативных массивов, но живут как отдельные программы и умеют делать много полезных штук: например,
// сохранять данные на диск, переносить данные между машинами в сети и тому подобное.
//
// В этой задаче реализована подобная база данных в виде класса FileKV,
// который сохраняет свои данные на диске в указанном файле. Она имеет следующий интерфейс:
//
// Примеры
// import FileKV from '../FileKV.js';
//
// const map = new FileKV('/path/to/dbfile');
// // Получение значения по ключу
// map.get('key'); // 'value'
// map.get('unknownkey'); // null
// // Получение значения и дефолт
// map.get('unknownkey', 'default value'); // 'default value'
// // Установка и обновление ключа
// map.set('key2', 'value2');
// map.get('key2'); // 'value2'
// // Удаление ключа
// map.unset('key2');
// map.get('key2'); // null
// map.set('key', 'value');
// // Возврат всех данных из базы
// map.toObject(); // { key: 'value' }
// В целях тестирования бывает полезно иметь реализацию такой базы данных, которая хранит данные в памяти,
// а не во внешнем хранилище. Это позволяет легко сбрасывать состояние между тестами и не замедлять их.

import fs from 'fs';
import _ from 'lodash';

class FileKV {
    constructor(filePath, initial = {}) {
        this.filePath = filePath;
        Object.entries(initial)
            .forEach(([key, value]) => this.set(key, value));
    }

    set(key, value) {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        const updatedData = {...data, [key]: value};
        fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
    }

    unset(key) {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        const updatedData = _.omit(data, key);
        fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
    }

    get(key, defaultValue = null) {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        return _.get(data, key, defaultValue);
    }

    toObject() {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        return data;
    }
}

export default FileKV;
