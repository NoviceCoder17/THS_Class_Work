function isPrime1(num){
    var flag= true
    for(var i =2; i <=num/2; i++){
        if(num %i==0){
            //console.log("this is not a prime numer")
            flag= false
            break;
        }    
    }
    return flag
}

console.log(isPrime1(700))