const str= "How are you"

const splitedStr = str.split(" ").reverse()
const output = splitedStr.reduce((acc,curr)=>{
    return acc += curr.split("").reverse().join("")+" "
},"")
console.log(output);
