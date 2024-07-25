const cart = ["shoes","shirt","pants"]

createOrder(cart)
.then(orderId => {
    console.log(`Your Order received! ${"\n"} order id : ${orderId}`)
    return orderId
})
.then(orderId => { return procedToPayment(orderId)})
.then(paymentInfo => {return  showOrderSummary(paymentInfo)})
.then(showOuput => console.log(showOuput))
.then(orderSummary => {return  updateWallet(orderSummary)})
.then(showOuput => console.log(showOuput))
.catch(err => console.log(err))

//cunstructing promise

function createOrder(cart){
    const promise = new Promise(function(resolve,reject){
        if(cart == []){
            const err = new Error("cart is empty")
            reject(err)
        }
        const orderId = 2314112;
        resolve(orderId)
    })
    return promise
}
function procedToPayment(orderId){
    const promise = new Promise(function(resolve,reject){
        if(orderId == undefined)
        {
            const err = new Error("OrderId is Wrong")
            reject(err)
        }
        resolve("Payment Completed")
        
    })
    return promise
} 
function showOrderSummary(paymentInfo){
    const promise = new Promise(function(resolve,reject){
        if(paymentInfo == ""){
            const err = new Error("Something went error!")
            reject(err)
        }
        resolve(`Payment Successfull ${"\n"} your order Confirmed ${"\n"} Order summary ${"\n"} Name : <name> `)
    })
    return promise
}
function updateWallet(orderSummary){
    const promise = new Promise(function(resolve,reject){
        if(orderSummary == ""){
            const err = new Error("something went wrong")
            reject(err)
        }
        resolve("wallet updated!")
    })
    return promise
}