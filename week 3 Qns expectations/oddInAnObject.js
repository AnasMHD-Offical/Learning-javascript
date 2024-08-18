//Sort the object in acending order of values
const obj = { a: 3, b: 9, c: 45, d: 0 };

const values = Object.values(obj)

values.sort((a, b)=> a - b)

let result = {}
for (let i = 0; i < values.length; i++) {
    for (const key in obj) {
        if (obj[key] === values[i]) {
            result[key] = values[i]
        }
    }
}

console.log(result)

//Sort the object in descending order of values

const obj1 = { a: 3, b: 9, c: 45, d: 0 };
const values1 = Object.values(obj)
values.sort((a, b)=> b - a)

let result1 = {}
for (let i = 0; i < values1.length; i++) {
    for (const key in obj) {
        if (obj1[key] === values[i]) {
            result1[key] = values[i]
        }
    }
}
console.log(result1)


// Find the odd values in the object and make it another object 
const numbers = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    f : 6,
    g : 7
}
let odd = Object.fromEntries(
    Object.entries(numbers).filter(([key,val])=>{
           if(val%2!==0){
            return [key,val]
           }
    })
)
console.log(odd);

//Display The longest word and its length from a longest string as an object
const string = "hello I am Anas Muhammed"
const words = string.split(' ')
words
let max = -Infinity

const longest = ()=>{
    const out = words.reduce((acc,curr)=>{
        if(curr.length > max){   
            max = curr.length;
            acc.len = max;
            acc.word = curr
        }
        return acc
    },{word:"",len:0})
    return {[out.word]:out.len}
}
console.log(longest());


//Display The longest word and its length from a shortest string as an object

const string1 = "hello I am Anas Muhammed"
const words1 = string1.split(' ')
words
let max1 = Infinity

const longest1 = ()=>{
    const out = words1.reduce((acc,curr)=>{
        if(curr.length < max1){   
            max1 = curr.length;
            acc.len = max1;
            acc.word = curr
        }
        return acc
    },{word:"",len:0})
    return {[out.word]:out.len}
}
console.log(longest1());



