function isPrime1(num){
    var flag= true
    if(num ==1){
        return false
    }
    for(var i =2; i <=num/2; i++){          // for(var i =2; i < num ; i++)
        if(num %i==0){
            //console.log("this is not a prime numer")
            flag= false
            break;
        }    
    }
    return flag
}


function primeNumbers(num){
    var primes = []
    for(var i =1; i <=num; i++){
        if(isPrime1(i)){
            primes.push(i);
        }
    }
    return primes
}

console.log(primeNumbers(100))