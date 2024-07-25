const radius = [3, 2, 4, 1];

const area = function (radius) {
    return (Math.PI * radius * radius)
}
const diameter = function (radius) {
    return (2 * radius)
}
const circumference = function (radius) {
    return (2 * Math.PI * radius)
}

Array.prototype.Calculate = function (logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(this [i]));
    }
    return output;
}

console.log(radius.map(area));
console.log(radius.map(diameter));
console.log(radius.map(circumference));
console.log(radius.Calculate(circumference));
// console.log(Calculate(radius, area));
// console.log(Calculate(radius, diameter));
// console.log(Calculate(radius, circumference));