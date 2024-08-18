const a = {
    a:1,
    b:2,
    c:{
        x:3,
        y:3,
        hello:()=>console.log(`Hello World`)
    }
}
const b = {
    c:3
}

// const merge = Object.assign(a,b)
// console.log(merge)


const copy = Object.assign({},a)

console.log(copy)

a.c.hello()
copy.c.x = 8
copy.c.hello = () => console.log(`Hey everyone`);
a.c.hello()
copy.c.hello()


console.log(copy)
console.log(a)

