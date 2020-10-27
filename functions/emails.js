//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов,
// а возвращает количество емейлов, расположенных на каждом бесплатном домене.
// Список бесплатных доменов хранится в константе freeEmailDomains.


import _ from 'lodash';

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
];

const getFreeDomainsCount = (emails) => {
    return emails
        .map((email) => email.split('@'))
        .filter(([, domain]) => freeEmailDomains.includes(domain))
        .reduce((acc, [, domain]) => ({
            ...acc,
            [domain]: _.get(acc, domain, 0) + 1,
        }), {});

};

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];


console.log(
    JSON.stringify(getFreeDomainsCount(emails)),
);




