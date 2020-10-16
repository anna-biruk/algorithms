//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:
//// Если домен передан без указания протокола,
// // то по умолчанию берется http
// getDomainInfo('yandex.ru')
// // {
// //   scheme: 'http',
// //   name: 'yandex.ru',
// // }
// getDomainInfo('https://hexlet.io');
// // {
// //   scheme: 'https',
// //   name: 'hexlet.io',
// // }
// getDomainInfo('http://google.com');
// // {
// //   scheme: 'http',
// //   name: 'google.com',
// // }

const getDomainInfo = (str) => {
    const info = {};
    const domainArray = str.split('://');
    if (domainArray.length === 2) { // ['https']
        info.scheme = domainArray[0];
        info.name = domainArray[1];
    }else{
        info.scheme = 'http';
        info.name = domainArray[0];
    }

    return info;
};
