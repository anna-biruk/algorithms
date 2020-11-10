//Реализуйте код, вызывающий сервис и печатающий на экран ожидаемую строку.
// Для извлечения города из аргументов командной строки, воспользуйтесь свойством argv глобального объекта process.
// Первый аргумент (передаваемое имя города) находится под индексом 2. Посмотреть описание и пример можно в документации.
//
// Подсказки
// Скрипты, модули и библиотеки

import axios from 'axios';
import WeatherService from './WheatherService';

const weather = new WeatherService(axios);
const city = process.argv[2];
weather.find(city).then((data) => {
    const message = `Temperature in ${data.name}: ${data.temperature}C`;
    console.log(message);
});