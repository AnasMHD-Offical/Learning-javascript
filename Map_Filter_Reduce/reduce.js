const arr = [1,2,4,3,57,2,5,9,3]
// const out = arr.reduce(([max,sec_max],curr)=>{
//     if(curr%2!== 0){
//         if(curr > max){
//             sec_max = max 
//             max = curr
//             return [max,sec_max]
//         }else if(curr > sec_max && curr != max){
//             sec_max = curr
//             return [max,sec_max]
//         }
//     }
//     return [max,sec_max]
// },[-Infinity,-Infinity])

// let max = -Infinity
// let sec_max = -Infinity

function maxValues(maxValue,secondMaxValue){
    this.max = maxValue,
    this.sec_max = secondMaxValue
}
const maxValue = new maxValues(-Infinity,-Infinity)
for(let i=0 ; i<=arr.length;i++){
    if(arr[i]%2!==0){
        if(arr[i] >  maxValue.max){
            maxValue.sec_max = maxValue.max
            maxValue.max = arr[i]
        }else if(arr[i] >  maxValue.sec_max && arr[i] != maxValue.max){
           maxValue.sec_max = arr[i]
        }
    }
}
console.log(maxValue.max,maxValue.sec_max)
console.table([maxValue])
// console.log(out)
