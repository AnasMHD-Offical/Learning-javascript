//ToString method : used for converting the whole array to a string 

let names = ["Anas", "Amal", "vishnu"]
let names2 = ["Athul", "Dony", "Anees"]
let stringName = names.toString()
console.log(stringName) //output : Anas,Amal,vishnu

//join() method
//similar to toString but we can specify the seperator

let output = names.join(" "); //we use whitespace as the seperator
console.log(output)
//output : Anas Amal vishnu
let output1 = names.join("/"); //we use backspace as the seperator
console.log(output1)
//output : Anas/Amal/vishnu


//concat() method : used to concat to array
let concated = names.concat(names2)
console.log(concated)
//output : ['Anas', 'Amal', 'vishnu', 'Athul', 'Dony', 'Anees']

//Splice() method : used to delete elements from an array and 

concated.splice(1, 1)//Deleting the element from the 
concated.splice(3, 1, "shahid")
let value = concated.splice(4, 1)
console.log(concated)
console.log(value)

let sett = concated.filter(function (x, index) {
    if ((index + 1) % 2 !== 0) return x
}, 0)
console.log(sett)


//slice() method : used to retive data from starting pos to ending pos
let output_value = concated.slice(1, 4)
console.log(output_value)
