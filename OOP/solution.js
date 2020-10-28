//Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками, добавленными в обратном порядке (begin меняется местами с end).
// Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка. То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).
// Примеры
// const beginPoint = new Point(1, 10);
// const endPoint = new Point(11, -3);
// const segment = new Segment(beginPoint, endPoint);
// const reversedSegment = reverse(segment);
// // прямое обращение к свойствам приведено только в демонстрационных целях
// console.log(
//   segment.beginPoint.x,
//   segment.beginPoint.y,
//   segment.endPoint.x,
//   segment.endPoint.y,
// );// => 1 10 11 -3
// console.log(
//   reversedSegment.beginPoint.x,
//   reversedSegment.beginPoint.y,
//   reversedSegment.endPoint.x,
//   reversedSegment.endPoint.y,
// ); // => 11 -3 1 10

//Point.js

function getX() {
    return this.x;
}

function getY() {
    return this.y;
}

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
}

//Segment.js

function getBeginPoint() {
    return this.beginPoint;
}

function getEndPoint() {
    return this.endPoint;
}

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
}

//solution.js

const reverse = (segment) => {
    const oldBeginPoint = segment.getBeginPoint();
    const oldEndPoint = segment.getEndPoint();
    const newBeginPoint = new Point(oldEndPoint.getX(), oldEndPoint.getY());
    const newEndPoint = new Point(oldBeginPoint.getX(), oldBeginPoint.getY());
    return new Segment(newBeginPoint, newEndPoint);
};

