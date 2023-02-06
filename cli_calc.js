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

var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Enter number between 1-4: ") 
switch(num){
    case 1:
        let sidea = readlineSync.question("Enter the value for of side: ")
        let area_square = sidea ** 2;
        console.log(`Area of Square ${area_square}`)
        break;
    case 2:
        let rad_circle = readlineSync.question("Enter the value for radius: ")
        let area_circle = Math.PI * rad_circle * rad_circle
        console.log(`Area of Circle: ${area_circle}`)
        break;
    case 3:
        let len = readlineSync.question("Enter the value for of length: ")
        let breadt = readlineSync.question("Enter the value for of breadth: ")
        let area_rectangle = len * breadt;
        console.log(`Area of Rectangle:  ${area_rectangle}`)
        break;
    case 4:
        let base = readlineSync.question("Enter the value for base: ")
        let heigh = readlineSync.question("Enter the value for height: ")
        let area_triangle = 1/2*(base*heigh);
        console.log(`Area of Triangle:  ${area_triangle }`)
        break;
    default:
        console.log('Invalid input; try again')
        break;
}



