// Strings concept

// var str = "prema shivaram" 
// console.log(str);
// var str1 = "JS"
// console.log(str + str1);  // concatenate

// Diff way to write string in JS
// "double quotes"- 
// 'Single quotes'-
//  backticks `` (special)- uses string polination -used to reference a variable within string
// 

var a = 40, b = 30, c= 10;
var sum = a+b+c
console.log(sum)
console.log("The sum of a= "+a+", b="+b+", c= "+c+" is  => sum = "+sum);
//$followed by{} = string pollination (`string = ${string}`);
console.log(`The sum of a=${a} , b=${b} , c=${c} is sum= ${sum}`);// This makes it
// dynamic, replaceable
//`https://github.com/${username}/${repo}`

//console.log(100 || 40 || 9 || 15);
//console.log("hhh" && 0 && undefined && null && NaN && "hi")
/*
Evaluates to a falsy value
  0
  empty string ""
  null
  undefined
  false
  NaN 
*/
//Logical not
console.log(!(5 < 100 && 100 > 10 && 12 < 10))
console.log(!("" || 0 || "hi"))
console.log(!("" && 0))

//STRINGS
