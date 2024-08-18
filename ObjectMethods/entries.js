const person = {
    firstName : "Anas",
    lastName : "Muhammed",
    age : 18
}

const entries = Object.entries(person)
console.log(entries)

const fullname = entries[0][1] +" "+ entries[1][1]

console.log(fullname);

//Entries means the key values pair 
// By using the Object.entries(). we can retrieve the key value pairs in the as an array.
