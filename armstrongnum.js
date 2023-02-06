//Armstrong number
//3**3 + 7**3 + 1**3 = 371

// function armstrong(num){
//     var digits = num.toString().length
//     var ind = num.toString().split("")
//     console.log(digits)
//     console.log(ind)
//     var result = ind[0] ** digits + ind[1] ** digits + ind[2] ** digits
//     console.log(result) 
    
// }
// armstrong(153)

var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Enter a number to check if its Armstrong number or not ") 
function armstrong(num){
    var digits = num.toString().length
    var ind = num.toString().split("")
    //console.log(digits)
    //console.log(ind)
    var result = 0
    for(var i =0; i<digits; i++){
       result += ind[i] ** digits
    }
    if(result ==num){
        console.log(`Armstrong number`)
    }
    else{
        console.log(`Not an Armstrong number`)
    }
      
}
armstrong(num)

// readlineSync to accept and check if its armstrong
// armstrong series 1-1000