//Реализуйте и экспортируйте по умолчанию класс InMemoryKV, который представляет собой in-memory key-value хранилище.
// Данные внутри него хранятся в обычном объекте. Интерфейс этого класса совпадает с FileKV за исключением конструктора.
// Конструктор InMemoryKV принимает на вход объект, который становится начальным значением базы данных.
//
// Примеры
// import InMemoryKV from '../InMemoryKV.js';
//
// const map = new InMemoryKV({ key: 10 });
// map.get('key'); // 10

export default class InMemoryKV {
    constructor(init = {}) {
        this.map = _.cloneDeep(init);
    }

    set(key, value) {
        this.map[key] = value;
    }

    unset(key) {
        this.map = _.omit(this.map, key);
    }

    get(key, defaultValue = null) {
        return _.get(this.map, key, defaultValue);
    }

    toObject() {
        return _.cloneDeep(this.map);
    }
};