var Arr = [1, 2, 1000, 200, 250, 190, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 17,
    23, 5, 6, 10, 10, 20, 30, 60, 70, 90, 1000, 200, 250, 5, 4, 9, 7]

var filteredpositives = Arr.filter(isPositive)
function isPositive(n){
    if (n%2 ==0){
        return true
    }
    else false
}

var filterednegatives = Arr.filter(isNegatives)
function isNegatives(n){
        if (n%2 == 1){
            return true
        }
        else false
}

var isPrimeVal = Arr.filter(isPrime)
function isPrime(n){
    var flag= true
    for(var i =2; i <=n/2; i++){
        if(n %i==0){
            flag= false
            break;
        }    
    }
    return flag
}
console.log(filteredpositives)
console.log(filterednegatives)
console.log(isPrimeVal)