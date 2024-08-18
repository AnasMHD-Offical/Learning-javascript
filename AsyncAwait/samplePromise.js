const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("promise rejected")
        resolve("Promise resolved after 4s")
    },4000)
})


promise.then((res)=>{
    console.log(res)
    console.log("hello wolrd")
})
.catch((err)=>console.log(err))

async function data(){
   try {
    const data = await promise
    console.log("Hello world"); 
    console.log(data); 
    
   } catch (error) {
    console.log(error.message);
   }
    
}
data()
console.log("hello world");
