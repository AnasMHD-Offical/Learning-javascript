const weakMap = new WeakMap();

const obj = {type:"text",behaviour:"Greeting"}
weakMap.set(obj,"Hello")

console.log(weakMap.get(obj));
console.log(weakMap);

