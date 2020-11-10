//Реализуйте стратегию, которая пытается заполнить поля, пробегаясь построчно слева направо и снизу вверх
// (начиная с левого нижнего угла). Как только она встречает свободное поле, то вставляет туда значение.

class Normal {
    getTurn(field) {
        return field.reduceRight((acc, item, i) => {
            const j = item.indexOf(null);
            if (acc.length === 0 && j !== -1) {
                return [i, j];
            }
            //console.log(acc);
            return acc;

        }, []);

    }
}

export default Normal;