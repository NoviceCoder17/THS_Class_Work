/* Functions- called and executed- reusable, return or output )
SYNTAX:
//Function declaration
function greeting(){
    console.log("Good Morning")
}
//Function call
greeting()

All functions are first class functions(Returns a value)

*/

function greeting(name){
    console.log("Good Morning "+ name)
}
greeting("Prema")

function fullName(f_name, l_name){
    console.log(f_name, l_name)
}
fullName("Prema","Shiva")

function value(){
    return 5;
}
let five = value()
console.log(five)
console.log(value())

function sum(a,b){
    return a+b;
}

let add1 =sum(5,6)
console.log(add1)


function evenOdd(num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}

var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("enter a number: ")

console.log(evenOdd(num))


function areaSquare(side){
    let area_square = side * side
    console.log(area_square)
}
function peremeterSquare(side){
    let per_square = 4 * side
    console.log(per_square)
}
var readlineSync = require('readline-sync');
let value1 = readlineSync.questionInt("enter the value for side of a square ")
let result1 = areaSquare(value1)
let result2 = peremeterSquare(value1)




