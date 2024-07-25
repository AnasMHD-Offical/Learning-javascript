//calback function
 
setTimeout(function (){
    console.log("timer");
},5000)
function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log("Y");
})
// console.log("hello");
