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

const arra = [1,2,3,5,[6,7],8]
const arrb = [...arra]
arrb[4][0] = 9
console.log(arra); 
console.log(arrb); 