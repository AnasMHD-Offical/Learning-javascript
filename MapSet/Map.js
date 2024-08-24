//Map()
const map = new Map()
map.set(777,{name:"Anas muhammed",age:18,place:"KTM"})
map.set(778,{name:"Aliya ",age:17,place:"KTM"})
map.set(779,{name:"Anas muhammed",age:18,place:"KTM"})

console.log(map.get(777))
console.log(map)


//Set() 
const set = new Set()
set.add(20304)
set.add(20304)
set.add(203049)
set.add(2030443)

console.log(set.size);

set.delete(20304)
set.clear()

console.log(set.size);

