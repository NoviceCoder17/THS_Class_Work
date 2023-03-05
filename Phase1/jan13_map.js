//MAP is an array helper method
// stored in a new array


// var filtereddata = data.map((ele,i)=>{
//     // this is a call back function
//     // return is a MUST for map 
//     return {
//         name: ele.name,
//         companyname: ele.companyname
//     }
// })

// console.log(filtereddata)

/* squares of each elements */
// var numbers = [2,3,4,5,6]
// var filteredsquares = numbers.map((ele,i)=>{
//     //return Math.pow(ele,2) OR
//     return ele ** 2
// })
// console.log(filteredsquares)


//Assignment
//Data from jan13
//if companyname or username starts with a vowel - store it in ana array called vowles
//Check if its starts wuth vowel, push the entire data to vowel data array
// . toLowercase() 

var arr = [ -1, 4, -5, -6, 2, 4, 7, -10, 9]
var filteredsquares = arr.filter(isPositive)
function isPositive(n){
    if (n>0){
        return true
    }
    else false
}
console.log(filteredsquares)

//forEach(not return), filter, sort, map(must have return), reduce


// is Even elements
// var arr= [22, 6, 5, 8, 94, 3, 11, 14, 19]
// var filtered_even = arr.filter(isEven)

// function isEven(n){
//     if(n%2==0){
//         return true
//     }
//     else false
// }
// console.log(filtered_even)


//two ways
var arr= [22, 6, 5, 8, 94, 3, 11, 14, 19]
var filtered_even = arr.filter((ele)=>{
    if(ele%2==0){
    return true
    }
    else false
})
console.log(filtered_even)

//Elements greater than array
var words=['spray','limit','elite','exuberant','destruction','present','fascinating']
var filtered_lenth = words.filter((ele,i)=>{
    if(ele.length>6)return true
    else false
})
console.log(filtered_lenth)

//two ways of syntax
var words=['spray','limit','elite','exuberant','destruction','present','fascinating']
var filtered_lenth = words.filter(ele => ele.length>6)
console.log(filtered_lenth)

var found_word = words.findIndex(ele => ele == 'destruction')
console.log(found_word)


