//В данном упражнении вам предстоит реализовать класс Url, который позволяет извлекать из HTTP адреса,
// представленного строкой, его части. Экспортируйте класс по умолчанию.
// Класс должен содержать конструктор и методы:
// конструктор - принимает на вход HTTP адрес в виде строки.
// getScheme() - возвращает протокол передачи данных (без двоеточия).
// getHostName() - возвращает имя хоста.
// getQueryParams() - возвращает параметры запроса в виде пар ключ-значение объекта.
// getQueryParam() - получает значение параметра запроса по имени. Если параметр с переданным именем не существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null).
// equals(url) - принимает объект класса Url и возвращает результат сравнения с текущим объектом - true или false.
// В процессе прохождения испытания вам нужно будет хорошо поработать с документацией и изучить возможности класса URL, для того чтобы распарсить строковое представление HTTP адреса.
// Примеры
// const url = new Url('http://yandex.ru:80?key=value&key2=value2');
// url.getScheme(); // 'http'
// url.getHostName(); // 'yandex.ru'
// url.getQueryParams();
// // {
// //   key: 'value',
// //   key2: 'value2',
// // };
// url.getQueryParam('key'); // 'value'
// // второй параметр - значение по умолчанию
// url.getQueryParam('key2', 'lala'); // 'value2'
// url.getQueryParam('new', 'ehu'); // 'ehu'
// url.getQueryParam('new'); // null
// url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
// url.equals(new Url('http://yandex.ru:80?key=value')); // false


class Url {
    constructor(str) {
        this.str = str;
    };

    getScheme() {
        let newWorld = this.str.split('://', 4);
        return newWorld[0];
    };

    getHostName() {
        let newWorld = this.str.split('://');
        let result = newWorld[1];
        if (newWorld[1].includes(':')) {
            result = newWorld[1].split(':');
        } else if (newWorld[1].includes('?')) {
            result = newWorld[1].split('?');
        }
        return result[0];
    };

    getQueryParams() {
        let newWorld = this.str.split('?');
        let result = newWorld[1].split('&');
        const res = result.reduce((previosItem, item) => {
            const [name, value] = item.split('=');
            previosItem[name] = value;
            return previosItem;
        }, {});
        return res
    };

    getQueryParam(key, defaultValue = null) {
        const res = this.getQueryParams();
        return res[key] || defaultValue;
    };

    equals(url) {
        return this.str === url.str;
    };
}
