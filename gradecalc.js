
/*
// Queston1- Take marks of a student as input
/* 
1. Marks - More than or equal to 90 - Grade S
2. Marks - 80 - 89 - Grade A
3. Marks - 70 - 79 - Grade B
4. Marks - 60 - 69 - Grade C
5. Marks - 50 - 59 - Grade D
6. Marks - 40 - 49 - Grade E
7. Marks less than 40 - Grade F
check corner cases
if input is <0 , invalid input
if input > 100 , invalid
cannot accept floats or strings
Hint: if-else Ladder and readlineSync.questionInt()
*/
var readlineSync = require('readline-sync');
let num = readlineSync.questionInt("Enter number between 0-100: ") 
if (num>=0 && num <100){
    if(num >=90 && num <=100){
        console.log("Grade S")
    }
    else if(num>=80 && num <=89){
        console.log("Grade A")
    }
    else if(num>=70 && num <=79){
        console.log("Grade B")
    }
    else if(num>=60 && num <=69){
        console.log("Grade C")
    }
    else if(num>=50 && num <=59){
        console.log("Grade D")
    }
    else if(num>=40 && num <=49){
        console.log("Grade E")
    }else if(num<40){
        console.log("Grade F")
    }
}
else{
    console.log("enter value between 0 and 100")
}


<<<<<<< HEAD
    
=======
    
>>>>>>> d1a36b4f25f6c76338b20ee57220b2d5b4c0fd00
