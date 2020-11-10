//Реализуйте стратегию, которая пытается заполнить поля, пробегаясь построчно слева направо и сверху вниз
// (начиная с левого верхнего угла). Как только она встречает свободное поле, то вставляет туда значение.

class Easy {
    getTurn(field) {
        return field.reduce((acc, item, i) => {
            const j = item.indexOf(null);
            if (acc.length === 0 && j !== -1) {
                return [i, j];
            }
            return acc;

        }, []);

    }
}

export default Easy;