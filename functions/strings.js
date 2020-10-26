//еализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке.
// Количество символов передаётся в takeLast() вторым параметром. Если передаётся пустая строка или строка меньше
// необходимой длины, функция должна вернуть null.

const run = (str) => {
    const takeLast = (str, n) => {
        let result = '';
        if (str.length < n || str.length === 0) {
            return null
        }
        for (let i = str.length - 1; i >= 0; i--) {
            if (str.length - n - 1 === i) {
                break;
            }

            result += str[i];
        }
        return result;
    };
    return takeLast(str, 4)
};