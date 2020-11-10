//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход объект базы данных и меняет в нём ключи и значения местами.
//
// swapKeyValue — полиморфная функция, она может работать с любой реализацией key-value, имеющей такой же интерфейс.
//
// Примеры
// import InMemoryKV from '../InMemoryKV.js';
// import swapKeyValue from '../keyValueFunctions.js';
//
// const map = new InMemoryKV({ key: 10 });
// map.set('key2', 'value2');
// swapKeyValue(map);
// map.get('key'); // null
// map.get(10); // 'key'
// map.get('value2'); // 'key2'


export default (map) => {
    const data = map.toObject();
    const entries = Object.entries(data);
    entries.forEach(([key]) => map.unset(key));
    entries.forEach(([key, value]) => map.set(value, key));
};