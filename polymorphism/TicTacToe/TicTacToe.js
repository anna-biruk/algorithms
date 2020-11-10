//TicTacToe – известная игра в крестики нолики, на поле 3x3. В этом задании, вам предстоит реализовать данную игру.
// Основной движок игры находится в файле ticTacToe.js. В директории strategies находится код, который отвечает
// за поведение AI (искусственный интеллект!). В зависимости от выбранного уровня игры,
// включается либо Easy стратегия, либо Normal.
//
// Задание специально построено так, чтобы предоставить вам максимальную свободу в организации кода.
// Результат будет хорошей лакмусовой бумажкой, по которой можно оценить насколько архитектурная тема была понята.
//
// TicTacToe.js
// Реализуйте класс TicTacToe, который представляет собой игру крестики-нолики. Принцип его работы описан в коде ниже:
//
// Примеры
// // По умолчанию выбран easy уровень. Его можно изменить, передав в конструктор строку 'normal'
// const game = new TicTacToe();
//
// // Если переданы аргументы, то ходит игрок. Первый аргумент – строка, второй – столбец.
// game.go(1, 1);
// // Ход компьютера
// game.go();
//
// game.go(0, 1);
// game.go();
//
// // Метод go возвращает true если текущий ход победный и false в ином случае
// const isWinner = game.go(2, 1); // true


import Easy from './strategies/Easy.js';
import Normal from './strategies/Normal.js';

const mapping = {
    'easy': new Easy,
    'normal': new Normal
};

class TicTacToe {
    constructor(strategy = 'easy') {
        this.strategy = mapping[strategy];
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    }

    go(row = null, col = null) {
        if (row === null || col === null) {
            const [rowPC, colPC] = this.strategy.getTurn(this.field);
            this.field[rowPC][colPC] = 'X';
            return this.isWinner('X');
        }
        this.field[row][col] = '0';
        return this.isWinner('0');
    }

    isWinner(type) {
        if (this.field.find((row) => this.check(row, type))) {
            return true;
        }
        for (let i = 0; i < 3; i += 1) {
            if (this.check(this.field.map((el) => el[i]), type)) {
                return true;
            }
        }
        const diagonal1 = [this.field[0][0], this.field[1][1], this.field[2][2]];
        if (this.check(diagonal1, type)) {
            return true;
        }
        const diagonal2 = [this.field[2][0], this.field[1][1], this.field[0][2]];
        if (this.check(diagonal2, type)) {
            return true;
        }
        return false;
    }

    check(row, type) {
        return row.every((value) => value === type);
    }
}

export default TicTacToe;