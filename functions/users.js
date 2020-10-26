//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей и возвращает
// плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.

import _ from 'lodash';

const getChildren = (users) => {
    const result = users.map((element) => {
        return element.children;
    }).filter(element => element.length !== 0);

    return _.flatten(result);
};


const users = [
    {
        name: 'Tirion',
        children: [
            {name: 'Mira', birthday: '1983-03-23'},
        ],
    },
    {name: 'Bronn', children: []},
    {
        name: 'Sam',
        children: [
            {name: 'Aria', birthday: '2012-11-03'},
            {name: 'Keit', birthday: '1933-05-14'},
        ],
    },
    {
        name: 'Rob',
        children: [
            {name: 'Tisha', birthday: '2012-11-03'},
        ],
    },
];

// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];

console.log(
    (getChildren(users))
);




