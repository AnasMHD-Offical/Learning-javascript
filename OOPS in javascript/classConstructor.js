class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello,my name is ${this.name} and i am ${this.age} years old`);   
    }
}

let person1 = new Person("Anas Muhammed",18)
person1.greet()
let person2 = new Person("Aliya ",17)
person2.greet()
