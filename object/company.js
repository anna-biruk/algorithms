//Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам.
// Эта функция принимает на вход две компании и возвращает true если их структура одинаковая и false в обратном случае.
// Проверка должна проходить по свойствам name, state, website.

import _ from 'lodash';

const is = (obj1, obj2) => {
    if (_.isEqual(obj1, obj2)) {
        return true
    } else {
        return false
    }
};

/*
export default (company1, company2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
};
* */
