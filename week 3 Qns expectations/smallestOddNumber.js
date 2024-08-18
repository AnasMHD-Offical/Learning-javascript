//Find the Smallest odd number using for loop
const arr = [2,3,4,5,1,6,7]

const out = arr.reduce((min,curr)=>{
    if(curr%2!==0){
        if(curr<min){
            return min = curr
        }
    }
    return min
},Infinity)

console.log(out);

//Find the Smallest odd number using for loop
let Oddmin = Infinity
for(let i = 0 ; i<arr.length ;i++){
    if(arr[i]%2!==0){
        if(arr[i] < Oddmin){
            Oddmin = arr[i]
        }
    }
}
console.log(Oddmin);

//Find Smallest even number 
const arr1 = [4,5,2,2,5,3]
const out1 = arr1.reduce((min,curr)=>{
    if(curr%2===0){
        if(curr < min){
            return min = curr
        }
    }
    return min
},Infinity)

console.log(out1);

//Find the Smallest even number using for loop
let evenMin = Infinity
for(let i = 0;i<arr1.length;i++){
    if(arr1[i]%2===0){
        if(arr1[i]<evenMin){
            evenMin = arr1[i]
        }
    }
}
