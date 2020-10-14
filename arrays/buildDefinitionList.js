//Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>)
// и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку.
// Экспортируйте функцию по умолчанию.

const buildDefinitionList = (arr) => {
    if (arr.length === 0) {
        return '';
    }
    const newArr = [];
    for (const item of arr) {
        newArr.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
    }
    const innerValue = newArr.join('');
    const result = `<dl>${innerValue}</dl>`;
    return result;
};

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
export default buildDefinitionList;