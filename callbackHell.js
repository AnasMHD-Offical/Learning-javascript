const cart = ["shoes","shirts","pants"] 

api.createOrder(cart,function () {

        api.procedToPayment(function (){
        
            api.showOrderSummary(function(){
                    
                    api.updateWallet()
                })
        })
})

