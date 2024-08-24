function greet(city){
    console.log(`Hello ${this.name} From ${city}`);
}

const person1 = {name:"Anas muhammed"}

const greetAnas = greet.bind(person1)

greetAnas("Kottayam")

// Real life example of bind()
const Logger = {
    log : function(message,timestamp){
        console.log(`[${timestamp}] ${message}`);
    }
}

const errorLogger = Logger.log.bind(null,'Error:')
errorLogger('Something Wrong',Date.now())