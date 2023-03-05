/*question 2: 
Take an input, and tell if it is a perfect square or not*/


var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Enter number between: ") 
var sq_num = (num ** (1/2))
console.log(sq_num)
if(Number.isInteger(sq_num)){
    console.log(`${num} is a perfect square`)
}
else{
    console.log(`${num} is NOT a perfect square`)
}