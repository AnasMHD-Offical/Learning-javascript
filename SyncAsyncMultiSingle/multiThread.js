//Single Threaded example

// console.log("Start");
// function singleThreaded(){
//     for(let i=0;i<3;i++){
//         console.log(`Task ${i}`)
//         //simulate a slow task 
//         for(let j = 0;j<10000000000;j++){}
//     }
// }
// singleThreaded()
// console.log("End");

//It block the callstack to execute the next task when a task getting delayed.

//Multi Threaded example

// console.log("Start");
// function mutliThread(){
//     for(let i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(`Task ${i}`);
//         },1000 * i)
//     }
// }
// mutliThread()
// console.log("End");


// console.log("Start");
// function multi(){
//     for(let i= 0 ;i<3;i++){
//         setTimeout(()=>{
//             console.log(`Task ${i}`);
            
//         },1000 * i)
//     }
// }
// multi()
// console.log("End");

// const obj = {name:"Anas",age:18}
// const obj1 = {name:"Peter Parker",age:20}

// function greet(city){
//     console.log(`Hello ${this.name} ,How are you and you are ${this.age} years old, right? Are you comming from ${city} ?`);
// }
// greet.call(obj,"Kottayam")
// greet.apply(obj,["Kottayam"])

// const user1 = greet.bind(obj,"kottayam")
// const user2 = greet.bind(obj1,"New york")
// user1()
// user2()
const str = "Hello"
let pad =str.padStart(6).padEnd(10)+"World"
console.log(pad);

//It doesn't block the callstack to execute the next task when a task getting delayed.