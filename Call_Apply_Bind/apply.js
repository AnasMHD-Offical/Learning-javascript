function greet(city,age){
    console.log(`Hello ${this.name} from ${city} and ${age} years old`);  
}

const person1 = {name:"Anas Muhammed"}
greet.apply(person1,["Kottayam",18])
const person2 = {name:"Aliya"}
greet.apply(person2,["Kottayam",17])

