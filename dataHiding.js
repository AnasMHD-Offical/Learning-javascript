// function counterAdd(){
//     var count = 1;

//     function IncrementCounter(){
//         count++;
//         console.log(count);
//     }
//     return IncrementCounter;
// }
//  var counter2 = counterAdd();
//  console.log(counter2);
//  counter2();
//  counter2();

 function Counter(){
    var count = 0,a = 10;//garbage collector is collected a so we can't see it.

   this.IncrementCounter =  function(){
        count++;
        console.log(count);
    }
   this.DecrementCounter =  function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.IncrementCounter();
counter1.DecrementCounter();
counter1.IncrementCounter();
counter1.DecrementCounter();
counter1.IncrementCounter();
counter1.DecrementCounter();


