let personPrototype = {
    greet : function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

let person1 = Object.create(personPrototype)
person1.name = "Anas Muhammed"
person1.age = 18
let person2 = Object.create(personPrototype)
person2.name = "Vishnu C"
person2.age = 20

person1.greet()
person2.greet()
