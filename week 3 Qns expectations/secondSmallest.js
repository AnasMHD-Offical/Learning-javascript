//Find second smallest  number using reduce
const arr = [222,34,21,322,321]

const out = arr.reduce(([min,sec_min],curr)=>{
    if(curr < min){
        sec_min = min
        min = curr
        return [min,sec_min]
    }else if(curr<sec_min && curr !== min){
        sec_min = curr
        return [min,sec_min]
    }
    return [min,sec_min]
},[Infinity,Infinity])

console.log(`Second largest  : ${out[1]}`);


