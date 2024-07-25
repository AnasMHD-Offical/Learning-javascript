// const cart = ["shoes","shirts","pants","t-shirts"]

// // createOrder(cart,function(){
// //         proceedToPayment(orderId); 
// // }) //here is a callback to exicute it and we can't trust callback
// // // so we will use promises

// // createOrder(cart,function (orderId) {

// //     procedToPayment(orderId,function (paymentInfo){
    
// //         showOrderSummary(paymentInfo,function(){
                
// //                 updateWallet()
// //             })
// //     })
// // })
// //here is a callback hell
// const promise = createOrder(cart);
// // {data : orderId}

// promise.then(function(){
//     proceedToPayment(orderId); 
// })
// createOrder(cart)
//     .then(function(orderId){
//         return proceedToPayment(orderId)
//     })
//     .then(function(paymentInfo){
//         return showOrderSummary(paymentInfo)
//     })
//     .then(function(paymentInfo){
//         return updateWallet(paymentInfo)
//     })
// //instead of the call back hell we can use promis for garranted response

// //for more lean code we can use arrow fn instead of the old manner
// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(paymentInfo => updateWallet(paymentInfo))
const GIthubApi = "https://api.github.com/users/AnasMHD-Offical"

const user = fetch(GIthubApi)

console.log(user) // it will log the api status 

user.then(function(data){
    console.log(data)
    console.log(data.status)
    console.log(data.redirected)
    data.statusText = "fulfiled"
})



