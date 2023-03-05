var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Enter a number ")
num1= (num **(1/2))
console.log(num1);
//if (num1.isInteger()){
//     console.log(`${num} is  a Perfect square`)
// }
// else{
//     console.log(`${num} is not a Perfect square`)
// }