var readlineSync = require('readline-sync');
// let num1 = readlineSync.questionInt("Please enter the number1 ")  
// console.log("Number1=" + num1);
// let num2 = readlineSync.questionInt("Please enter the number1 ")  
// console.log("Number2=" + num2);
// var symbol = readlineSync.question("Enter the symbol ")
// switch(symbol){
//     case'+':
//         console.log(num1+num2)  
//         break;  
//     case'*':
//         console.log(num1*num2) 
//         break   
//     default:
//         console.log("input")
//         break; 
// }  

let num = readlineSync.questionInt("Enter number between 0-7") 
switch(num){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;  
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break; 
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log('Invalid input')
        break;
}



