//constructor for a basic object 
function BasicObject(){
    this.basicProperty = "I am basic property"
}
// constructor for extented object 
function ExtentedObject(){
    this.extentedProperty = "I am extented property"
}

//setup prototype chain

ExtentedObject.prototype = new BasicObject()

const basicObj = new BasicObject()
const extentedObj = new ExtentedObject()

console.log(extentedObj.basicProperty)
console.log(extentedObj.extentedProperty)
console.log(basicObj.basicProperty)
console.log(basicObj.extentedProperty)
