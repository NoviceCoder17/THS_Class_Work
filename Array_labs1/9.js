let  Arr = [1,3,5,7,9]
let newArr =[]
Arr.filter((ele,i)=>{
    newArr.push(ele+10)
    return newArr
})
console.log(newArr)