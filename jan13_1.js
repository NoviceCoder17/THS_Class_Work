// //append zeroes to single digits
// var arr = [5, 17, -9, 30, 90, 3, -30]
// function appenZeros(arr){
//     var newarr= arr.map((ele,i)=>{
//         if(ele >0 && ele <10){
//             return `0${ele}`
//          }
//         else if(ele <0 && ele >-10){
//             return `-0${Math.abs(ele)}`  // ele -1  // 0 is not considered as a number/pre appended
//         }
//         else{
//             return ele
//         }  
//     }     
//     )
//     console.log(newarr);
// }

// appenZeros(arr)

//Factor- no remainder , completely divisible
// print all factors for a number and number of factors

function factor(num){
    var facts=[];
    for(var i=0; i<=num; i++){
        if(num%i===0){
        facts.push(i)
        }
    }
    console.log(facts,facts.length)
}

factor(16)


function isPrime(num){
        if(factor(num)>2){
            console.log("not")
        }
        else console.log("true")
}
isPrime(3)


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