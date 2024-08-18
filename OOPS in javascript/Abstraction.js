function Shape(){
    throw new Error("Cannot instatiate abstract class")
}
Shape.prototype.calculateArea = function(){
    throw new Error("Abstract Method must be Implemented")
}

function Circle(radius){
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.calculateArea = function(){
    return Math.PI * this.radius * this.radius
}

function Rectangle(l,b){
    this.l = l
    this.b = b
}
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.calculateArea = function(){
    return this.l * this.b
}
let circle = new Circle(4)
let  rectangle_1 = new Rectangle(4,9)
let  rectangle_2 = new Rectangle(5,7)

console.log(circle.calculateArea());
console.log(rectangle_1.calculateArea());
console.log(rectangle_2.calculateArea());
