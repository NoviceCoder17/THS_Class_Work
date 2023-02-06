// var sum =0
// for (var i=0; i<10; i++){
//     sum+=i;
// }
// console.log(sum)

// var sum1=0;
// var arr= [56,82,12,6,1]
// for(var i=0;i<arr.length;i++){
//     sum1+=arr[i]
// }
// console.log(sum1)

var b= [1,2,3]
//console.log(b.length)
//b[b.length]=5;
//b[b.length]=5,6;
//console.log(b)
b.push(10)
console.log(b)
b.push("Prema","Shiva","rama")
console.log(b)
b.pop()
console.log(b)

//shift
//removes elemenet fron the start of the array
var val=b.shift()
console.log(b)

//unshift
//adds element to the add of the array
var val=b.unshift("add","new")
console.log(b)
