
const promise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("hello,promise resolved")
    },10000)
})
const promise2 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("hello,promise resolved")
    },20000)
})

//here async & await is used to handle promises
async function handlePromise(){
    //
    const val = await promise;
    console.log(val)
    console.log("hello")

    const val2 = await promise2;
    console.log(val2)
    console.log("hello world")
}
handlePromise()
console.log("hello")



//async always return a promise
// function getData(){
//     promise.then((res) => console.log(res))
//     console.log("hello")
// }
// getData()
// const data = getData();
// data.then((response) => console.log(response))
// console.log(data)