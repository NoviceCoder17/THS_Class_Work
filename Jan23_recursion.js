//continue if we want to skip a condition and goes back to for example.
//a function which calls itself is called recursive function and its recursion
// Not just factorial
// Recurvice paradigm

//For loop is iterative method
// for(var i =0 ; i<=10;i++){
//     console.log(i)
// }

function print(num){

    if(num==0) return
    console.log(num)
    print(num-1)
}

var val =print(10)
//console.log(val)
