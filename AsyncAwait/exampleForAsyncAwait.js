
const API_URL = "https://api.github.com/users/AnasMHD-Offical"
// const API_URL = "https://api.github.com/users/{user}"

async function handlepropise(){
    //error handiling using try{} catch{}
    try{
        const data = await fetch(API_URL)
        const jsonvalue = await data.json()
        console.log(jsonvalue)
        console.log(jsonvalue.id)
        console.log(jsonvalue.login)
        if(jsonvalue.company === "FounderFie"){
         console.log(`He is a founder of ${jsonvalue.company}`)
        }
    } catch(err){
        console.log(err)
    }
  
}
handlepropise()