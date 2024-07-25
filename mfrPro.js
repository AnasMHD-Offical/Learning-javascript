const user = [
    {firstname : "Anas" , Lastname : "Muhammed" , age : 18},
    {firstname : "Athul" , Lastname : "Krishna" , age : 23},
    {firstname : "Vishnu" , Lastname : "C" , age : 20},
    {firstname : "Muhammed" , Lastname : "Anees" , age : 18},
]

//list of fullname 
const output = user.map((x) => x.firstname +" "+ x.Lastname)
console.log(output);

// Find how many peoples are in the same age 18 

const output_age = user.filter(function(x){
    if(x.age == 18){
        return x;
    }
})

console.log(output_age)

//Find the no of user having same age 

const output_Age_No = user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1;
    }
    return acc
}, {})

console.log(output_Age_No)

//find out the user,s firstname if there age is lessthan 23


// //map(),filter(),reduce() chaining
const output2 = user.filter(function(x){
    return x.age < 23
}).map((x) => x.firstname)
console.log(output2)

//make the above code with reduce()


const output3 = user.reduce(function(acc,curr){
  
    if(curr.age < 23){
    //    acc[curr.Name] = curr.firstname    
    //  acc += curr.firstname," ";
    //  acc = " "+ curr.firstname 
        console.log(curr.firstname)
    return acc += curr.firstname  + ","
    }
    return acc
},"")
const value = output3.split(",");
console.log(output3)
console.log(value)
