//prompt is used to take value from keyboard
// prompt("Enter the value ")- this is used in browser environment

//readline-sync (This is a package)- A package in Node.js contains all the files you need for a module. Modules are JavaScript libraries you can include in your project.
//git ignore = node_modules(make sure to add this)
//package.json= all the dependencies

var readlineSync = require('readline-sync');  // require is a keyword
// var userName= readlineSync.question("May I have your name\n");
// console.log(userName);
// console.log(typeof(userName))

// let num1 = readlineSync.questionInt("Please enter the number1 ")  //to get a number
// console.log("Number1=" + num1)
// let num2 = readlineSync.questionInt("Please enter the number2 ")
// console.log("Number2=" + num2)
// let result = num1+num2
// console.log("Sum=" + result)
//console.log();

/*
Declarative statement  var a=10

Block statements { statements grouped in flower bracs}

Condition statements if, if-else

switch statements

looping statements

function statements
*/

//var mails = readlineSync.questionInt("Enter the number of mails: ")
// console.log(mails);
// if(mails>0){
//     console.log("Your inbox has mails");
// }
// else if(mails<0){
//     console.log("Mails cannot be negative");
// }
// else{
//     console.log("There are no mails")
// }

//Find the greatest number//

// let num1 = readlineSync.questionInt("Please enter the number1 ")  //to get a number
// console.log("Number1=" + num1)
// let num2 = readlineSync.questionInt("Please enter the number2 ")
// console.log("Number2=" + num2)
// if(num1>num2){
//     console.log(`${num1} is greater than ${num2}`)
// }
// else if(num1<num2){
//     console.log(`${num2} is greater than ${num1}`)
// }
// else{
//     console.log(`${num1} and ${num2} are equal`)
// }


//find the greatest number(3 numbers)
// let num1 = readlineSync.questionInt("Please enter the number1 ")  //to get a number
// console.log("Number1=" + num1)
// let num2 = readlineSync.questionInt("Please enter the number2 ")
// console.log("Number2=" + num2)
// let num3 = readlineSync.questionInt("Please enter the number3 ")
// console.log("Number3=" + num3)

// if(num1>num2 && num2 >num3){
//     console.log("num1 is greater")
// }
// else if(num1<num2 && num2>num3 )
// {
//     console.log("num2 is greater")
// }
// else if(num1==num2 && num2==num3){
//     console.log("nums are equal")
// }
// else{
//     console.log("num3 is greater")
// }

//Ternary operator
// var a= 5;
// var b =6;
// (a>b)? console.log("A is greater"): console.log("B is greater")

// let num1 = readlineSync.questionInt("Please enter the number1 ")  
// console.log("Number1=" + num1);
// (num1%2==0)?console.log(`${num1} is even`): console.log(`${num1} is odd`)

let num1 = readlineSync.questionInt("Please enter the number1 ")  
console.log("Number1=" + num1);
let num2 = readlineSync.questionInt("Please enter the number1 ")  
console.log("Number2=" + num2);
let num3 = readlineSync.questionInt("Please enter the number1 ")  
console.log("Number3=" + num3);
var greatest=(num1>num2&&num1>num3)?num1:(num2>num3)?num2:num3
console.log("Greatest number is :"+greatest)











