
  function x(a){
    return function y(b){
        return function z(c){
            return a+b*c
        }
    }
  }


  function hello(a,b,c){
        return a + b * c
  }
//   console.log(hello(2,4,9));\

  
  
  console.log(x(2)(2)(10));
  const fn = x(3)
  console.log(fn(2)(2));
  
// // Delete the key of the object that vlues is an even number
//   obj = {a:4,b:3,c:5,d:0,y:9}

//   const values = Object.values(obj)
//   for(let i=0;i<values.length;i++){
//     for(const keys in obj){
//         if(values[i]%2===0){
//            if(obj[keys]===values[i]){
//             delete obj[keys]
//            } 
//         }
//     }
//   }
//   console.log(obj);

// // Slpit array into equal  halves

// let arr = [1,2,3,5,5,6]

// middle = arr.length/2
// const arr1 = arr.splice(0,middle)
// const arr2 = arr.splice(-middle)
// console.log(arr)
// console.log(arr1)
// console.log(arr2)


obj1 = {a:4,b:7,c:36,d:6}

const values1 = Object.values(obj1)

values1.sort((a,b)=> b - a)

let result = {}
for(let i=0;i<values1.length;i++){
    for(const key in obj1){
        if(obj1[key] === values1[i]){
            result[key] = values1[i]
        }
    }
}

console.log(result)

console.log("Start");

function multi(){
    for(let i = 1;i<=3;i++){
        setTimeout(()=>{
            console.log(`Task ${i}`);
        },2000)
    }
}
multi()
console.log("end");
let max = -Infinity
str = "Hello my name is Anas Muhammed"
const split = str.split(" ")
const out = split.reduce((acc,curr)=>{
    if(curr.length>max){
        acc = curr.length
    }
    return acc
})

console.log(out);


  
  