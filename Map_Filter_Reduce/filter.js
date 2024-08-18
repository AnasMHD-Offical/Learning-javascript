const arr = [3,2,4,2,3,2,7,4,3,6,8]

const out = arr.filter((e)=>{
    if(e%3==0){
        return e
    }
})
console.log(out);



