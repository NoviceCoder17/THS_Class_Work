
function guessNumber(min, max){
    guessRan= (Math.floor(Math.random() * (max-min+1)) + min) 
    return guessRan
}

var readlineSync = require('readline-sync')
let userGuess = readlineSync.questionInt("Guess a number between 1-100: ");
var guessRan;
guessNumber(1,100)
if(userGuess>0 && userGuess <=100){
if(guessRan == userGuess){
    console.log(`you guess it right`)
}
else if(guessRan > userGuess){
    console.log(`you guessed a lower number`)
}
else{
    console.log(`You guessed a higher number `)

}
}
else{
    console.log(`Retry!!!! Enter value between 1-100`)
}





