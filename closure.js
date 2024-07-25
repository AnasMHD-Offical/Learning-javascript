function x(){
    var a = 4;
    return function y(){
        console.log(a);
    }
     
}
var z = x();
console.log(z);
z();
