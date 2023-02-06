let Arr = [12,-5,74,21,54,38,0]
var filteredBy50= Arr.filter((ele,i)=>{
    if(ele < 50){
        return ele
    }
})
console.log(filteredBy50)