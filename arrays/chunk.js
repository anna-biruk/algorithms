//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает
// размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.

const chunk = (arr, chunkSize) => {
    let newArr = [];
    for (let i = 0; i < arr.length;i += chunkSize) {
        newArr.push(arr.slice(i,i + chunkSize ));
    }
    return newArr;
};