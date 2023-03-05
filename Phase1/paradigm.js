let arr = [1,2,3,4,5]
let object2 = {...arr}   //Object to array
console.log(object2)

//PARADIGMS - Programming paradigms are not languages or tools. You can't "build" anything with a paradigm. 
//They're more like a set of ideals and guidelines that many people have agreed on, followed, and expanded upon.
// style of programming
// 4 types = Functional(Imperative, Declarative), object oriented

//Imperative = step by step, how a program operates(if, for, )
//Declarative = what we want the program to do (array, helper methods)

//IMPERATIVE
// for(var i =0; i<arr.length; i++){
//     console.log(arr[i])
// }

//DECLARATIVE
//forEach

// arr.forEach((ele,i)=>{
//     console.log(ele,i)
// })


let arr1 = [-1,-2,3,4,5]
arr1.forEach((ele,i)=>{
    if(ele>0){
        console.log(ele,i)
    }
})

