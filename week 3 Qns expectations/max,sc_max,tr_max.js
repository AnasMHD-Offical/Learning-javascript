let arr = [1,2,8,4,5]
let output = arr.reduce(function([max,sc_max,tr_max],curr){
    if(max<curr){
        tr_max = sc_max
        sc_max = max
        max = curr
        return [max,sc_max,tr_max]
    }else if(sc_max < curr && curr != max ){
        tr_max = sc_max
        sc_max = curr
        return [max,sc_max,tr_max]
    }else if(tr_max < curr && curr != sc_max){
        tr_max = curr
        return [max,sc_max,tr_max]
    }
    return [max,sec_max,tr_max]
},[max = -Infinity,sec_max = -Infinity])
console.log(output)