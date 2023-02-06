// arrayof positive number
// find out the prime and narcisstic number 
// Remove those numbers

function filterArr(arr){
    var p =0;
    var n =0;
    for(var i=0; i<arr.length; i++){
        if(isPrime1(arr[i])){
            p++
        }
        if(armstrong(arr[i])){
            n++
        }
        if( isPrime1(arr[i])|| armstrong(arr[i]) ){
            arr.splice(i,1)
            i--;
        }     
    }  
    console.log(`prime number ${p}`)
    console.log(`armstrong number ${n}`)
    console.log(arr)
}


function isPrime1(num){
    var flag= true
    if(num ==1){
        return false
    }
    for(var i =2; i <=num/2; i++){          // for(var i =2; i < num ; i++)
        if(num %i==0){
            flag= false
            break;
        }    
    }
    return flag
}

function armstrong(num){
    var digits = num.toString().length
    var ind = num.toString().split("")
    var result = 0
    var flag = true
    for(var i =0; i<digits; i++){
       result += ind[i] ** digits
    }
    if(result ==num) return true
    else return false      
}

//filterArr([10, 20, 30, 40, 2,5, 7,153,1024,1634, 11])

module.exports={
   isPrime1,
   armstrong,
   //common js version(old version)
}