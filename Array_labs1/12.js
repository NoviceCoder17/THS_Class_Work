let Arr = [-22,4,84,72,55]

var filterBool= Arr.map((ele)=>{
    if(ele>0){            
        return true
    }
    else
        return false
}).find((ele)=>{
  if(ele === 'false'){
    return false
  }
  else{
    return true
  } 
})
console.log(filterBool)

    












  

