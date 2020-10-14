//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих
// и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной.
// Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок)
// считается сбалансированной.
//Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [],
// фигурные — {} и угловые — <>.


const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)

const isBracketStructureBalanced = (arr) => {
    const stack = [];
    for (const symbol of arr) {
        if (openingSymbols.includes(symbol)) {
            stack.push(symbol);
        } else if (closingSymbols.includes(symbol)) {
            const bracketIndex = closingSymbols.indexOf(symbol);
            const openingSymbol = openingSymbols[bracketIndex];
            const element = stack.pop();

            if (openingSymbol !== element) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

isBracketStructureBalanced('({}}[]');

export default isBracketStructureBalanced;