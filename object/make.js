//Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его.
// Для создания компании обязательно только одно свойство – имя компании.
// Остальные свойства добавляются только если они есть. Параметры:
// Имя
// Объект с дополнительными свойствами
// Также у компаний есть два свойства со значениями по умолчанию:
// state – moderating
// createdAt – текущая дата

const make = (str, obj={}) => {
    let result = { ...obj, name: str, createdAt: Date.now(), state: 'moderating' };
    if (obj.state) {
        result.state = obj.state;
    }
    return result;
};

const company = make('Hexlet');
console.log(company);
// {
//   name: 'Helxet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }
const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Helxet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }