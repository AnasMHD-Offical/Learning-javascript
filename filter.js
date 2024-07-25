const arr = [1,2,3,4,5]

//Filter odd values


//Examples of how we can use or write filter fn
//Example-1
function isOdd(x){
    return x % 2;
}
const output = arr.filter(isOdd);
console.log(output)

//Example-2
const output1 = arr.filter(function greaterThan3(x){
    return x > 3
}) 
console.log(output1);

//Example-3
const output2 = arr.filter((x) => { return x < 4})
console.log(output2)
//Example-4 
const output3 = arr.filter((x) => x < 4)
console.log(output3)