const arr = [1,2,3,4,5]


//Normal way of finding sum
function getSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]

    }
    return sum;
}
console.log(getSum(arr));

//finding sum using reduce

const output = arr.reduce(function(acc,curr){
    return acc + curr;
},0)

console.log(output);


//find largest number from an array
let num = [1,2,3,490,5,6,90]
let max = num.reduce((a,b) => Math.max(a,b),-Infinity)
console.log(max)