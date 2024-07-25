
const arr = [1,5,2,8,4,6]

//normal way of find max in js
function findMax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }
    return max;
} 

console.log(findMax(arr))

//Find the max using reduce

const output = arr.reduce(function(max,curr){
    if(max < curr){
        max = curr;
    }
    return max;
},0)

console.log(output);