let Arr = [40,100,1,25,10];
Arr.sort((a,b)=>{
    return a-b  
})
console.log(Arr)
console.log(Arr.reverse())
var randomOrder = Arr.sort((a,b)=>{
    return 0.5 - Math.random()
})
console.log(randomOrder)






