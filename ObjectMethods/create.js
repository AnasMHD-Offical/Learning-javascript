const person = {
    isHuman:false,
    Intro: function(){
        console.log(`Hello, my name is ${this.fname} ${this.lname} and i am ${this.age} years old.`);        
    }
}

const human_1 = Object.create(person)
const entries = Object.entries(person)

human_1.fname = "Anas"
human_1.lname = "Muhammed"
human_1.age = 18
human_1.Intro()
const hunman_1Entries = Object.entries(human_1)

 human_1.Fullname = hunman_1Entries[0][1] + " " + hunman_1Entries[1][1]
console.log(human_1);





//It create an instanse of the object with purticular value that we provided
