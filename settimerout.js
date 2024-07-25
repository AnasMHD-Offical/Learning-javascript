// function x(){
//     let i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },5000);
//     console.log("Hello!");
// }
// x();

// function y(){
//     for( let i = 1;i <= 5 ; i++){
//         setTimeout(function (){
//          console.log(i);   
//         },i * 1000);
//     }
// }
// y();
function y(){
    for( var i = 1;i <= 5 ; i++){
        function close(i){
            setTimeout(function (){
                console.log(i);   
               },i * 1000);
        }
        close(i);
    }
}
y();