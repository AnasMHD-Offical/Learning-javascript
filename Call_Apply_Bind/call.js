function greet(city){
    console.log(`Hello ${this.name} from ${city}`);
}
const person1 = {name:"Anas Muhammed"}
const person2 = {name:"Aliya"}
greet.call(person1,"Kottayam")
greet.call(person2,"Kottayam")
console.log(person1)

//using bind we can make a specific object enabled function and it doesn't invoke fastly as call and apply but it create a function and execiute
