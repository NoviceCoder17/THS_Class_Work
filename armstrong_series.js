// also called as Narcissitic Numbers
var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Enter a number to check if its Armstrong number or not ") 
function armstrong(num){
    var digits = num.toString().length
    var ind = num.toString().split("")
    var result = 0
    var flag = true
    for(var i =0; i<digits; i++){
       result += ind[i] ** digits
    }
    if(result ==num) return true
    else return false      
}

function armstrong_series(num){
    var arr = []
    for(var i =0; i<=num; i++){
        if(armstrong(i)){
            arr.push(i)
        }
    }
    return arr
}
console.log(armstrong_series(num))


// Remove the negative values in an array - imperative(for loop) approach  and declarative(array helper) .map/filter