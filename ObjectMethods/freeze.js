const constants = {
    pi : 3.14,
    planet_3 : "Earth",
    newOne:{
        x:3
    }
}

Object.freeze(constants)

constants.pi = 2.14
constants.newOne.x = 56
constants.newOne.newproperty = "Hello ducks"

console.log(constants);

console.log(constants.pi);
console.log(constants.newProperty);
