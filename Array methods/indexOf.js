let names = ["Anas", "Amal", "vishnu"]
let names2 = ["Athul", "Dony", "Anees", "Dony", "Anees"]

//indexOf method
let index = names2.indexOf("Anees")
console.log(index)
//Eventhough there is 2 anees in different pos but it does not read because it stop traversal when it get the true value

//lastIndexOf() method
let lastIndex = names2.lastIndexOf("Anees")
console.log(lastIndex)
//here we get the 2nd anees result because now it starts reading from the end and cut off the taversal  when the value found

//flat() method 
let arr = [1, 2, 3, 4, [5, 6,], 7, 8]
console.log(arr)
let modArr = arr.flat();
console.log(modArr)

//some() method
let isGreaterThan5 = arr.some( n => n > 6)
console.log(isGreaterThan5)

// every() method
let isGreaterThan0 = modArr.every( (n) => n > 0 )
console.log(isGreaterThan0)

//Find() method
let stock = [
    {item : "ketchep",qty :41},
    {item : "mayo",qty :21},
    {item : "hot sauce",qty :41},
    {item : "mayo",qty :41},
]
let mayo = stock.find((s)=> s.item === "mayo");

console.log(mayo.qty)

//sort() method
let NumArr = [4,2,6,4,9,5,3]
let NumArr2 = [4,20,66,48,9,5,3]
//String Sort
let sortedNames2 = names2.sort();
console.log(sortedNames2)
//1 digit Number Sort
let SortedNumArr = NumArr.sort();
console.log(SortedNumArr)
//1 digit reverse sort
let SortedNumArrRev = NumArr.sort((a,b)=> b-a);
console.log(SortedNumArr)
//2 digit Number Sort
//But in case of 2 digit we want to add a call back that retrun the number diff 
let SortedNumArr2 = NumArr2.sort((a,b)=> a-b );
console.log(SortedNumArr2)

