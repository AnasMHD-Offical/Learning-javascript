const arr = [1,2,3,4,5,6,67,4,6,3,2]
let isPrime = false
let primeArr = []
// let max = -Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<2){
//         isPrime = false
//     }else{
//         isPrime = true
//         for(let j = 2;j<=arr[i]/2;j++){
//             if(arr[i]%j==0){
//                 isPrime = false
//                 break
//             }
//         }
//     }

//     if(isPrime){
//         primeArr.push(arr[i])
//     }
// }
const out = arr.reduce((max,curr)=>{
    if(curr<2){
        isPrime = false
    }else{
        isPrime = true
        for(let j = 2;j<=curr/2;j++){
            if(curr%j==0){
                isPrime = false
                break
            }
        }
    }
    if(isPrime){
        if(curr>max){
            max = curr
        }
    }
    return max
},-Infinity)
//smallest prime number
const MinOut = arr.reduce((min,curr)=>{
    if(curr<2){
        isPrime = false
    }else{
        isPrime = true
        for(let j = 2;j<=curr/2;j++){
            if(curr%j==0){
                isPrime = false
                break
            }
        }
    }
    if(isPrime){
        if(curr<min){
            min = curr
        }
    }
    return min
},Infinity)
console.log(primeArr);
console.log(out);
console.log(MinOut);

