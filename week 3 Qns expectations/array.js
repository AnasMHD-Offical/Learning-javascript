//Find the elements in the array which is divisible by 5 and take its sum

const arr = [3,4,6,5,7,10]
// let sum = 0
// for(i=0;i<arr.length;i++){
//     if(arr[i]%5==0){
//         sum+=arr[i]
//     }
// }
// console.log(sum);

const out = arr.reduce((sum,curr)=>{
    if(curr%5==0){
        sum+=curr
    }
    return sum
},0)
console.log(out);

