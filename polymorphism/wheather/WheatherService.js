//Реализуйте логику работы сервиса. Под сервисом здесь понимается класс, умеющий работать с конкретным сервисом погоды
// (в интернете их довольно много). В перспективе классов может быть много и они могут подменять друг друга
// (то есть обеспечивать полиморфизм).
//
// Объект этого класса должен уметь запрашивать данные у сервера (адрес выше) по конкретному городу и возвращать их обратно.
//
// Для извлечения данных о погоде, ему нужно выполнить http-запрос.
// Для выполнения подобных запросов понадобится http-клиент, библиотека, которая сама формирует правильный http-запрос и
// возвращает ответ. В нашем случае используется axios, наиболее популярный http-клиент в JavaScript мире.
//
// Сделайте так, чтобы http-клиент не был зашит внутри класса, используйте инъекцию зависимостей для проброса
// клиента во внутрь. Потенциально это позволит подменить реализацию http-клиента (то есть использовать другой клиент),
// без необходимости переписывать код сервиса.
//
// Пример того как делаются запросы с помощью axios:
//
// // Внутри async функции
// // Выполнение GET запроса по указанному адресу
// const response = await axios.get('https://hexlet.io/lessons?page=2')
// // response содержит http-ответ

import {resolve} from 'url';

const apiUrl = 'http://localhost:8080/api/v2/';

class WeatherService {
    constructor(client) {
        this.client = client;
    }

    async find(cityName) {
        const url = resolve(apiUrl, `cities/${cityName}`);
        const response = await this.client.get(url);
        const result = JSON.parse(response.data)
        return result;
    }
}

export default WeatherService;