// write a function
// consider we have an object only numerical values
// Sum all values
let obj= {
    a : 2,
    b : 4,
    c : 10,
    e : 128
}
function sumObjVal(Obj){
    var sum =0;
    for( key in obj){
        sum+=(obj[key])
    }
    return sum
}
var val=sumObjVal(obj)
console.log(val)
console.log(sumObjVal1(obj))