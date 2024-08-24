//SHALLOW COPY
const og = {number : [1,2,3]}

arr = [1,3,4,56,[3,5]]

const shallowCopy = {...og}

shallowCopy.number.push(6)

console.log(shallowCopy);
console.log(og);


// Definition for shallow copy :=>
//In shallow copy it copy the root(parent) elements and only give the reference of the child elements(nested elements)
//so that if we change the copied innner element it will change the reference and so that the change will affect the original elements

//DEEP COPY
const origin = {numbers : [1,2,3]}

const deepCopy = JSON.parse(JSON.stringify(origin))

deepCopy.numbers.push(5)

console.log(deepCopy);
console.log(origin);

// Definition of deep copy
// We can perform deep copy in different ways.Here is one of the techinque we used to perform deep copy
// Deep copy means copying the nested object also not the reference and in goes deep into the elements
