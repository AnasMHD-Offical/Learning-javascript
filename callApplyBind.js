let a = {
    fname : "Anas",
    lname : "Muhammed",
    age:39
}


a.age = 27;
console.log(a)
function setname(hometown,state){
    console.log(this.fname +" "+ this.lname + " From " +hometown+" , "+state)
}
setname.call(a)
setname.call(a,"Kottayam")
setname.apply(a,["kottayam"])

let details = setname.bind(a,"kottayam","kerala")
console.log(details);
details()