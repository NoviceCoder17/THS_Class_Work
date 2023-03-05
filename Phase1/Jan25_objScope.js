let a = {
    aa: 1,
    bb: 2
}

let b={
    aa: 1,
    bb:2
}

let c = b
b.aa= 34
console.log(c,b)


console.log(45 == 45)
console.log(45 == 49)
console.log(a == b)       // JS cannot compare objects, different memory locations
console.log(a === b)      //  
console.log(a.aa == b.aa)

let str1 = "Prme"
let str2 = "prema"
console.log(str1 == str2)

var arr = [1,2, 3, 4, 5]
var arr1 = [9,2, 3, 4, 5]
console.log(typeof(arr))
console.log(arr == arr1)

const a1 = {
    fname: "I",
    lname: "N"
}

a1.lname = "gun"
console.log(a1) 

const arr2 = [1, 2,3,4,5]// Declared with array and objects but the inner keys elements can be modified
arr2.push(101)
console.log(arr2)
arr2.shift()
console.log(arr2)

let arr4 =[1,2, 3, 4, 5]
let arr5 = arr4               // shallow copy; points towards 
arr5.push("prema")           //change made to array2 will reflect in array1
//console.log(arr4 == arr5)  

console.log(arr5,arr4)       // this works with Objects as well


