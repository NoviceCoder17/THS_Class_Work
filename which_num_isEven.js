/*
Find the even number between two numbers
*/

function which_Num_isEven(n1,n2){
    if(n1%2==0 && n2%2==0){
        console.log(`Both numbers are even`)
    }
    else if(n1 %2 == 0 ){
        console.log(`${n1} (number1) is Even`)
    }
    else if(n2 %2 == 0){
        console.log(`${n2} (number2) is even`)
    }
    else{
        console.log(`Both numbers are odd`)
    }

}
var readlineSync = require('readline-sync');
let value1 = readlineSync.questionInt("enter the num1 ")
let value2 = readlineSync.questionInt("enter the num2 ")
which_Num_isEven(value1,value2)
