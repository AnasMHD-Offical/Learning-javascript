if(!Array.prototype.pop){
    Array.prototype.pop = function(){
        let lastElemt = this[this.length - 1]
        this.length--
        return lastElemt
    }
}

let arr = [23,4,1,4,2]
console.log(arr.pop());
console.log(arr);

if(!Array.prototype.push){
    Array.prototype.push = function(num){
        this.length++
        this[this.length] = this.num
    }
}
arr.push()
console.log(arr);