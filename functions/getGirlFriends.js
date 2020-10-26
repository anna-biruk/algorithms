//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей и возвращает
// плоский список подруг всех пользователей (без сохранения ключей).
// Друзья каждого пользователя хранятся в виде массива в ключе friends.
// Пол доступен по ключу gender и может принимать значения male или female.

import _ from 'lodash';

const getGirlFriends = (users) => {
    let friendArray = [];
    users.forEach(element => {
        element.friends.forEach(friend => {
            if (friend.gender === 'female') {
                friendArray.push(friend);
            }
        });
    });

    return _.flatten(friendArray)
};

const users = [
    {
        name: 'Tirion',
        friends: [
            {name: 'Mira', gender: 'female'},
            {name: 'Ramsey', gender: 'male'},
        ],
    },
    {name: 'Bronn', friends: []},
    {
        name: 'Sam',
        friends: [
            {name: 'Aria', gender: 'female'},
            {name: 'Keit', gender: 'female'},
        ],
    },
    {
        name: 'Rob',
        friends: [
            {name: 'Taywin', gender: 'male'},
        ],
    },
];

console.log(
    JSON.stringify(getGirlFriends(users))
);




