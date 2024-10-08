function greet(city){
    console.log(`Hello ${this.name} from ${city}`);
}
const person1 = {name:"Anas Muhammed"}
const person2 = {name:"Aliya"}
greet.call(person1,"Kottayam")
greet.call(person2,"Kottayam")
console.log(person1)

//using bind we can make a specific object enabled function and it doesn't invoke fastly as call and apply but it create a function and execiute


//Real life examples of call()

const Logger = {
    log : function(message,timestamp){
        console.log(`[${timestamp}] ${message}`);
    }
}

const button = {name:"Button"}
const form = {name:"Form"}

const logEvent = function(message){
    Logger.log.call(this,`${this.name}:${message}`,Date.now())
}
// const logFormEvent = function(message){
//     Logger.log.call(this,`${this.name}:${message}`,Date.now())
// }

logEvent.call(button,"Clicked")
logEvent.call(form,"Submitted")
// logFormEvent.call(form,"Submit")