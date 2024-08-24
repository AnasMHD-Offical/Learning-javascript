function greet(city,age){
    console.log(`Hello ${this.name} from ${city} and ${age} years old`);  
}

const person1 = {name:"Anas Muhammed"}
greet.apply(person1,["Kottayam",18])
const person2 = {name:"Aliya"}
greet.apply(person2,["Kottayam",17])

// Real life example of apply
const Logger = {
    log : function(message,timestamp){
        console.log(`[${timestamp}] ${message}`);
    }
}

const networkRequest = {name:'Network Request'}
const events = ['Request Sent' , 'Responds Recieved' , 'Data Processed']

Logger.log.apply(networkRequest,[events[0],Date.now()])
Logger.log.apply(networkRequest,[events[1],Date.now()])
Logger.log.apply(networkRequest,[events[2],Date.now()])



