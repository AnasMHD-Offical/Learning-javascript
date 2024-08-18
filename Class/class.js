class Car{
    constructor(maker,model){
        this.maker = maker
        this.model = model
    }
    start(){
        console.log(`The ${this.maker} ${this.model} car is Starting..`);
        
    }
    stop(){
        console.log(`The ${this.maker} ${this.model} car is Stoping..`);
    }
}

const Car1 = new Car("Toyota","land cruiser")
Car1.start()
Car1.stop()
const Car2 = new Car("BMW","M2")
Car2.start()
Car2.stop()


