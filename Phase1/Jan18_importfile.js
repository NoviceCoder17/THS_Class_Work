var utils = require("./jan18_1.js")

//console.log(utils)


// function filterArr(arr){
//     var p =0;
//     var n =0;
//     for(var i=0; i<arr.length; i++){
//         if(isPrime1(arr[i])){
//             p++
//         }
//         if(armstrong(arr[i])){
//             n++
//         }
//         if( isPrime1(arr[i])|| armstrong(arr[i]) ){
//             arr.splice(i,1)
//             i--;
//         }     
//     }  
//     console.log(`prime number ${p}`)
//     console.log(`armstrong number ${n}`)
//     console.log(arr)
// }


//declartive
function filterArr(arr){
    var primes= arr.filter(ele =>utils.isPrime1(ele))
    console.log(primes.length)
    var armstrongs= arr.filter(ele => utils.armstrong(ele))
    console.log(armstrongs.length)
    var filtered = arr.filter(ele=> {
        if((utils.isPrime1(ele) || utils.armstrong(ele))){
            return false
        }
        return true
    })       
    console.log(filtered)
}

//arr.filter(ele => !isPrime(ele) && !armstrong(ele))

filterArr([10, 20, 30, 40, 2,5, 7,153,1024,1634, 11])

