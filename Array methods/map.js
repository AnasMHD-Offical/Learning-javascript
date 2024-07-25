//Example for map()
/*syntax >>> 
const banana =  array.map((item) => item + iteml)

*/
//example-1
const arr = [1,2,3,4,5,6]

const sqaure = arr.map((num) => num*num) 
console.log(sqaure)
// output :  [1, 4, 9, 16, 25, 36] 
 
//example-2
const arr_food = ["Apple","Orange","Tomato","Cucumbur","Potato","Grapes","Carrot","Cabbage"]

const duplicate_item = arr_food.map((item) => item+","+item)
console.log(duplicate_item);
/*['Apple,Apple', 'Orange,Orange', 'Tomato,Tomato', 'Cucumbur,Cucumbur', 'Potato,Potato', 'Grapes,Grapes', 'Carrot,Carrot', 'Cabbage,Cabbage'] */
