//The bellow function is call back function
function x(){
    console.log("Hello World!")
}
//the below function  is higher Order Function
function y(x){
    x();
}
//Normal method 
// dont recommended way

const radius = [3,2,4,1];

const CalculateArea = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(CalculateArea(radius));
const CalculateCircumfirence = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI * radius[i]);
    }
    return output;
}
console.log(CalculateCircumfirence(radius));

const Calculatediameter = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(Calculatediameter(radius));