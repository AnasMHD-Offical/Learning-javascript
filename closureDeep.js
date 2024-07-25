function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()();


function getArray(){
    let a = prompt("Enter the array 1 :");
    let lmt1 = prompt(" :");
    let arr1 = a.split(',');
    let b = prompt("Enter the array 2 :");
    let arr2 = b.split(',');

    console.log(arr1);
    console.log(arr2);

    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;

    console.log("Array after swapping!");
    
    console.log(arr1);
    console.log(arr2);
}
getArray();