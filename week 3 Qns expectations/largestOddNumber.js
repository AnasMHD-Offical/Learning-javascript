//Find the largest odd number in an array using reduce
const arr = [2,33,4,1,9,324,1]
const out = arr.reduce((max,curr)=>{
    if(curr%2!==0){
        if(curr > max){
            return max = curr
        }
    }
    return max
},-Infinity)

console.log(out);
//Find the largest odd number in an array using for loop
let oddMax = -Infinity
for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        if(arr[i] > oddMax){
            oddMax = arr[i]
        }
    }
}
console.log(oddMax);

// Find largest EvenNumber from the array using reduce
const evenOut = arr.reduce((max,curr)=>{
    if(curr % 2 === 0){
        if(curr > max){
            return max = curr
        }
    }
    return max
},-Infinity)

console.log(evenOut);

//Find largest EvenNumber from the array using from loop

let EvenMax = -Infinity
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
        if(arr[i] > EvenMax){
            EvenMax = arr[i]
        }
    }
}
console.log(EvenMax)



