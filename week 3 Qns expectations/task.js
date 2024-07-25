const arr = [
    {id:2,num:3},
    {id:5,num:4},
    {id:6,num:7},
    {id:2,num:4},    
]
let numArr = []
const output = arr.map((curr)=>{
    let val = Object.values(curr)
    let a =  val.filter((x)=>{
        if(x%2==0){
            return x;
        }
    })
    numArr.push(a)
})
console.log(numArr.flat())
let final = numArr.flat().reduce((acc,curr)=>{
   return acc + curr
})
console.log(final);
