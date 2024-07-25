const arr = [6,1,2,3,4,5]

//double of the array = [12,2,4,6,8,10]

//Triple of the array = [18,3,6,9,12,15]

//Binary of the array = ['101','1','10','11','100','110' ]

function double(x){
    return x * 2;
}
function tripleFor(y){
    console.log(y * 3) //her we use the fn for foreach and if we return the fn we don't dont have any new array to store.Because foreach edit the same array.
}
function triple(y){
    return y * 3 //But in this case we can actually map creata a new array for the operations so we want to return it to store in an array.
}
function binary(z){
    return z.toString(2);
}

//examples for writing map fn
//example -1
const output1= arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);

//example -2
const output4 = arr.map(function square(x){
    return x * x;
}) 

//Exapmle - 3
const output5 = arr.map((x) => x*x);

//forEach declaration example :
arr.forEach(tripleFor)

console.log(output1)
console.log(output2)
console.log(output3)
console.log(output4)
console.log(output5)


