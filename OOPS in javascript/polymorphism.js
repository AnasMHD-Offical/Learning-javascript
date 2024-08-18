function animalSound(animal){
    if(animal.quack){
        return animal.quack()
    }else if(animal.bark){
        return animal.bark()
    }else{
        return "No sound!"
    }
}

const duck = {quack : ()=> 'Quack Quack!'}
const dog = {bark : ()=> 'woof woof!'}

console.log(animalSound(duck));
console.log(animalSound(dog));
