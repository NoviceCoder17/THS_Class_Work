// Hoisting

// x=5
// var x;
// console.log(x)
// var x=5

// fname = "Prema"
// console.log(fname)
// var fname

// console.log(x)
// var x=5;
// console.log(x)

var a = 12
{
   // let a=121;
    console.log(a)
    {
        var a=35       // modifies the global space value,
        console.log(a);
      
    }
    console.log(a)
}

console.log(a)

// VERDICT:  do not mix var and lets