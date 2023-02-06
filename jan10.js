//Verify if the number is a multiple of 5 and 3
// var readlineSync = require('readline-sync');
// let num = readlineSync.questionInt("Enter any number: ") 
// if(num % 5 == 0 && num %3 ==0){
//     console.log(`${num} is a multiple of 3 and 5`)
// }
// else if(num % 5 == 0){
//     console.log(`${num} is a multiple of 5`)
// }
// else if(num % 3 == 0){
//     console.log(`${num} is a multiple of 3`)
// }
// else{
//     console.log(`${num} is NOT a multiple of either 3 or 5`)
// }

/*
    Switch case:
    Create a CLI calculator:
    Area calculator
    1. Press 1 to select square
    2. Press 2 to select Circle
    3. Press 3 to select rectangle
    4. Press 4 to select triagle
    Enter enter your choice:
    Calculate the area for the choice
    ask for inputs and get the value
*/

//Loops
/*While Loop*/
// var a = 1;
// while(a<=15){
//     console.log(a);
//     a++;
// }

//Natural numbers (all positive numbers)
// while(a<=100){
//     console.log(a);
//     a++;
// }
//Make sure its not an infinite loop

/*Do- While Loop*/
//First it will console.log in the do loop and then checks condition
// if the while loops is not satisfied even then once it will be displayed


var practicehours1= 25
do{
    console.log(practicehours1)
}while(practicehours1<=15)

var practicehours= 5
do{
    console.log(practicehours++)
}while(practicehours<=15)

/*For loop*/
var count=0
for (var i=0; i<= 1000;i+=3){
    console.log(i)
    count++
}
console.log(count)

for(var i=0; i<100;i++){
    if(i%3 ==0) console.log(i);      //multiples of 3
    count++
}