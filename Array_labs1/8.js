let Arr = [2,4,6,8,10]
Arr.map((ele,i)=>{
    Arr.splice(i,1,(ele * 2))
    return Arr
})
console.log(Arr)