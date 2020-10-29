//Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:
//
// addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства:
// name – имя и price – стоимость.
// getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
// getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
// getCount – возвращает количество товаров в корзине
//Примеры
// const cart = new Cart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35

class Cart {
    constructor() {
        this.items = []
    }

    addItem(item, count) {
        this.items.push({item, count})
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return this.items.reduce((acc, prod) => {
            acc += prod.item.price * prod.count;
            return acc;
        }, 0)
    }

    getCount() {
        return this.items.reduce((acc, item) => {
            return acc += item.count;
        }, 0)
    }
}

