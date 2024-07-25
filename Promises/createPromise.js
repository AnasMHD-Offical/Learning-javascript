let cart = ["Shirt","Pants","Shoes","jacket"]

const promise = createOrder(cart);
promise.then(function(orderId) {console.log(`you orded the product ${"\n"} order id : ${orderId}`)})
.then((orderId)=> proceedToPayment(orderId))
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})

// creating a asynchorunus operation of creating an order

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //create an order 
         if(!validateCart(cart)){
            const err = new Error("cart is not valid")
            reject(err)
         }
         const orderId = "23445h55"
         if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
         }
    })
    return pr 
}
function validateCart(cart){
    return true
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successfull")
    })
}