//В этой практике вам предстоит поработать с односвязным списком. Для лучшего понимания задачи, прочитайте литературу
// данную в подсказках и изучите исходники файла Node.js, внутри которого находится реализация односвязного списка.
// И посмотрите тесты, там видно как список создается и используется.
// linkedList.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход односвязный список и переворачивает его.
//
// Примеры
// import Node from './Node';
// import reverse from './linkedList';
//
// const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
// const reversedNumbers = reverse(numbers); // (3, 2, 1)
// Подсказки
// Односвязный список
import Node from './Node.js';
import _ from 'lodash';

/*const reverse = (list) => {
    let array = [];
    let newList = _.cloneDeep(list);
    while (newList.getNext()) {
        const value = newList.getValue();
        array.push(value);
        newList = newList.getNext();
    }
    array.push(newList.getValue());
    let tmp = null;
    for (let i = 0; i < array.length; i++) {
        tmp = new Node(array[i], tmp)
    }
    return tmp;
};
*/
const reverse = (list) => {
    let tmp = null;
    while (list.getNext()) {
        tmp = new Node(list.getValue(), tmp);
        list = list.getNext();
    }
    tmp = new Node(list.getValue(), tmp);
    return tmp;
};

const numbers = new Node(1, new Node(2, new Node(3)));//(1,2,3)
const reversedNumbers = reverse(numbers);// (3,2,1)
