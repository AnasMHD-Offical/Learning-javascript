const person = {
    firstName:"Anas",
    lastName:"Muhammed",
    age:18
}

const entries = Object.entries(person)
console.log(entries);

const object = Object.fromEntries(entries)

console.log(object);




const object1 = { a: 8, b: 4, c: 9 };

const object2 = Object.fromEntries(
  Object.entries(object1).sort(([key, val]) => [key, val]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
