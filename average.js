var ele= [2,5,7,8,9,11,34,5,6]

function getAvg(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum/arr.length
}
console.log(getAvg(ele))