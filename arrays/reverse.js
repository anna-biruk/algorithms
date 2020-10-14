const reverse = (arr) => {
    for (let i = Number.parseInt((arr.length - 1) / 2); i >= 0; i--) {
        const index = (arr.length - 1) - i;
        const temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
};
const names = ['john', 'smith', 'test', 'karl', 'fkjgkfj'];

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']
reverse(names);
console.log(names);

export {reverse};