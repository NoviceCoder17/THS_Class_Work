//Declarative

let fruits = ["apple","banana", "orange", "banana"]
var citrus = fruits.slice(2,4)
console.log(fruits)
console.log(citrus)

//Original is getting updated
//and the splice values will be stored in a variable
let fruits1 = ["apple","banana", "orange", "lemon"]
var citrus1 = fruits.splice(1,2)  // where you wanna start and number of values you wanna spliced
console.log(fruits)
console.log(citrus1)

//Concat
let fruits2 = ["apple","banana"]
let conca_fruits3 = fruits2.concat("Avocado", "musk melon")
console.log(conca_fruits3)
console.log(fruits2)  // original array is not modified

//join
let fruits3 = ["apple","banana"]
let fruits3_join = fruits3.join(",") // converts an array to string
//reverse
let rev_fruits3 = fruits3.reverse()
console.log(fruits3_join)
console.log(rev_fruits3)
//indexOf
var index=fruits.indexOf("banana") // Index of first element it finds it will return
console.log(index)
var index1=fruits.lastIndexOf("banana")
console.log(index1)

//Assignment 1
// Function takes a string
// reverse it
// hello = olleh
// use array

//Assignment 2
var a = {
    a: 1,
    b: 2
}

var b = {
    a: 1,
    b: 2
}

console.log(a==b)
// gives false why??

