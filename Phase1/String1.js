// let greeting = "hello world"
// console.log(greeting.length);
// //Index represent each char in string/array
// console.log(greeting[11]);
// console.log(greeting.charAt(4))
// //Functions/methods
// /*
// .charAt
// .indexOf
// */
// console.log(greeting.indexOf('H'));   // gives -1 if its not available
// console.log(greeting.indexOf('l'))
// console.log(greeting.slice(6,9))    // "H" is a parameter

// //Slice= (begining and end point(doesn't include this))
// // Slice = for strings and arrays
// //Splice= for arrays (its modified and return the string)
// console.log(greeting.slice(-5))

// //toLowerCase and toUpperCase
// console.log(greeting.toLowerCase());
// console.log(greeting)
// console.log(greeting.toUpperCase())

let greeting = "helloworld"
console.log(greeting[0].toUpperCase()+greeting.slice(1,))
console.log(greeting.charAt(0).toUpperCase() + greeting.slice(1,5)+greeting.charAt(5).toUpperCase()+ greeting.slice(6))

var text= "             hello               "   //considers spaces
console.log(text)
console.log(text.trim())     // remove extra whitespaces
console.log(text.trimEnd())

var word = "abc"
console.log(word .repeat(3))   // repeat any number of times
var str =" hello hey hi such hi"
console.log(str.replace("hi", "replaced"))   // replace
console.log(str.replaceAll("hi", "replaced"))  //replaceAll
console.log("hello"+"world")
var hello = "hello"
console.log(hello.charCodeAt(2))
console.log(hello.concat(" world"))
console.log(hello.split(""))  // "" converts each char into array

var str= "Coding"
console.log(str.split(" "))    // "Space" converts each word to an arrage

var str1= "Coding&is&array"
console.log(str1.split("&")) 

var ar = ['h', 'e','l']
console.log(ar.join(""))    // array to string

//Assignment
console.log(str.split("").reverse().join(""));




//Assignment:
/*
 reverse a string and output
*/