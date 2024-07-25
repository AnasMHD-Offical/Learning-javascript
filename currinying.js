//normal function
function x(a,b,c){
    return a+b+c
}
//curriying a function
function x(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(x(3)(4)(5))