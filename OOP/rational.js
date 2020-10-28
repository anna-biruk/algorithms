//Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число.
// Рациональное число должно быть представлено объектом со следующими методами:
// Геттер getNumer() - возвращает числитель
// Геттер getDenom() - возвращает знаменатель
// Геттер toString() - возвращает строковое представление числа
// Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает
// новое рациональное число (не изменяет текущее!)
//const rat1 = make(3, 9);
// rat1.getNumer(); // 3
// rat1.getDenom(); // 9
//
// const rat2 = make(10, 3);
//
// // Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
// const rat3 = rat1.add(rat2);
// rat3.toString(); // '99/27'


const make = (numer, denom) => ({
    numer: numer,
    denom: denom,
    getNumer: function getNumer() {
        return this.numer;
    },
    getDenom: function getDenom() {
        return this.denom;
    },
    toString: function toString() {
        return `${this.numer}/${this.denom}`;
    },
    add: function add(rat) {
        let a = this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer();
        let b = this.getDenom() * rat.getDenom();
        return make(a, b);
    }
});

export default make;