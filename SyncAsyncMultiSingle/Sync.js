//Synchronus operation

console.log("Start");
function syncFunction(){
    for(let i=0;i<3;i++){
        console.log(`sync operation ${i}`);
        
    }
}
syncFunction()
console.log("end");


/*Output : 
>Start   
>sync Operation 0
>sync Operation 1
>sync Operation 2
>End

*/
//It wait for the program executed

//Asynchronus operation

console.log("Start");
function asyncFunction(){
    setTimeout(()=>{
        console.log(`Async operation`);
    },2000)
}
asyncFunction()
console.log("End");

/*Output : 
>Start   
>End
>Async Operation 

*/

//The operations done parallelly without blocking the callstack 
