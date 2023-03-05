//ccumulator(starts of with 0) given at the end , current value

var arr=[1,2,3,4,5]
var sum =arr.reduce((acc, curr)=>{
    return acc +curr  
},0)
console.log(sum)

var prod = arr.reduce((acc,curr)=>{
    return acc * curr   
}, 1)
console.log(prod)