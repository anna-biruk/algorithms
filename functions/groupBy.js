//Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству.
// Функция принимает аргументами массив объектов и название свойству для группировки.
// Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными,
// подходящими для группы.


const groupBy = (arr, value) => {
    if (arr.length === 0) {
        return {};
    }
    return arr.reduce((prev, current) => {
        if (!prev[current[value]]) {
            prev[current[value]] = [current];
        } else {
            prev[current[value]].push(current);
        }
        return prev;
    }, {})
};


const students = [
    {name: 'Tirion', class: 'B', mark: 3},
    {name: 'Keit', class: 'A', mark: 3},
    {name: 'Ramsey', class: 'A', mark: 4},
];

console.log(
    JSON.stringify(groupBy(students, 'mark')),
);




