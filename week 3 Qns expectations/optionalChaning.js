const obj = {
    a:10,
    b:30,
    c:{
        d:{
            g:89
        }
    }
}


const arr = ["Hello","hi"]
const [greet1,greet2] = arr
greet1
greet2
const {a,b} = obj
const some = obj.c?.d
console.log(some);


const map = new Map()