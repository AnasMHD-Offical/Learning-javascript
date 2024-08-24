const person = {
    name:"Anas muhammed",
    age:18,
    greet: function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);        
    }
}

//Real life examples of call

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