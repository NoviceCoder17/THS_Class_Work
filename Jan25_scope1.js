// function abc(){
//     var fname = "PRema"
// }
// abc()
// console.log(fname)

// On creating a variable with var, let or const, they are
// going to be within the function and cannot be used outside
// var can create leaks
// Hoisting- declare variable outside it can be used but if variable is 
// declared in block can be used outside

// const x = 25    
// {
//     console.log(x)
// }

// function abc(){
//     console.log(x)
// }
// abc()   // Since x is declared outside/globally it can used by the f(n) as well

// function abc(){
//     x = 100
//     console.log(x)
// }
// abc()
abc1()
console.log(iam)
function abc1(){
      var iam= "No"
}

// for(i =0; i<4; i++){
//     console.log(i)
// }
// console.log(i,x)
// console.log(process)

// This works even without keyword it will work as it considers as var
// 

// "use str"