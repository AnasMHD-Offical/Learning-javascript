const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       if(true){
        resolve("The promise resolved")
       }else{
        reject("The promise rejected")
       }
    },2000)
})

const handlePromise = async (req,res)=>{
    try {
        const user = await promise
        console.log(user);
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        console.log("Exicuting the next program that dosen,t affect the promise")
    }
}
handlePromise()

// try {
//     var interval = setInterval(()=>{
//         console.log("Hello world!");
//     },1000)
    
// } catch (error) {
//     console.log(error);
// }
// finally{
//     setTimeout(()=>{
//         clearInterval(interval)
//     },3000)
// }
