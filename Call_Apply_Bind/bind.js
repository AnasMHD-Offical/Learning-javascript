function greet(city){
    console.log(`Hello ${this.name} From ${city}`);
}

const person1 = {name:"Anas muhammed"}

const greetAnas = greet.bind(person1)

greetAnas("Kottayam")