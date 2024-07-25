let originalArray = [1, 2, [3, 4]];
// let shallowCopy = originalArray.slice(); 
let shallowCopy2 = [...originalArray]
// Create a shallow copy

// Modify the nested array in the shallow copy
// shallowCopy[2][0] = 98;
shallowCopy2 [2][0] = 45;
shallowCopy2 [1][0] = 5;

console.log(originalArray); // [1, 2, [99, 4]]
console.log(shallowCopy2);   // [1, 2, [99, 4]]
