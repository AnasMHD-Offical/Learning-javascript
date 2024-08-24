obj = {
    a:10,
    b:39
}

// Object.freeze(obj)
// obj.a = 20
// obj.c = 40
// console.log(obj);

Object.seal(obj)
obj.a = 20
obj.c = 40
console.log(obj);

// Object.seal() allow us to edit the existing property but we can't add a new property to the object