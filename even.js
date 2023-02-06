let arr = [3,5,7,6,4,9,22,51,42]

for(var i = 0 ; i < arr.length ; i++){
    if(arr[i]%2 == 0){
        console.log("even " + arr[i])
    }else {
        console.log("odd " + arr[i])
    }
}