//Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит место ближайшее к указанной точке на
// карте и возвращает его. Параметры функции:
//
// locations – массив мест на карте. Каждое место это массив из двух элементов, где первый элемент это название места,
// второй – точка на карте (массив из двух чисел x и y).
// point – текущая точка на карте. Массив из двух элементов-координат x и y.
//Расстояние между точками высчитывается с помощью функции getDistance.

/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getDistance = (currentPoint, otherPoint) => {
    let xLength = currentPoint[0] - otherPoint[0];
    let yLength = otherPoint[1] - currentPoint[1];
    return Math.sqrt(xLength ** 2 + yLength ** 2);
};


const getTheNearestLocation = (locations, point) => {
    let minDistance = null;
    let nearestItemLocation = null;
    for (let itemLocation of locations) {
        let distance = getDistance(point, itemLocation[1]);
        if (distance < minDistance) {
            minDistance = distance;
            nearestItemLocation = itemLocation;
        } else if (minDistance === null) {
            minDistance = distance;
            nearestItemLocation = itemLocation;
        }
    }
    return nearestItemLocation;
};

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [5, 5];
console.log(getTheNearestLocation(locations, currentPoint));
export {getTheNearestLocation, getDistance}
// END
