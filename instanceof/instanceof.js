//It is used to define is it is an instanceof a purticular class or constructor function

function car(maker,model){
    this.maker = maker
    this.model = model 
}

const car1 = new car("BMW","M2")
console.log(car1);

const car3 = "Hello"
console.log(car1 instanceof car);
console.log(car3 instanceof car);
