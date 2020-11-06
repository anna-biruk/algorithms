//Реализуйте таймер в виде промиса.
//
// import wait from './timer.js';
//
// wait(100).then(() => console.log('time is over!'));
// Экспортируйте функцию по умолчанию.

const wait = (timer) =>
    new Promise((resolve) => setTimeout(resolve, timer));

export default wait;