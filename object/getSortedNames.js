//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей,
// извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.



const getSortedNames = (arr) => {
    let result = [];
    for (let item of arr) {
        const { name } = item;
        result.push(name);
    }
    result.sort();
    return result;
};

//Второй вариант
const getSortedNames = (arr) => {
    const result = arr.map(element => {
        const { name } = element;
        return name;
    });
    return result.sort();
};
const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

console.log(getSortedNames(users));