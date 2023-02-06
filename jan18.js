//Remove negative numbers
//Imperative approach
arr = [-1, -3, 5, -9, 10, 32, -15]
for (var i = 0; i < arr.length; i++) {
    //splice modifies initial array
    if (arr[i] < 0) {
        arr.splice(i, 1)   //consecutive negative values will not be checked
        i--;  //move one step back, goes back i[0] ; -1 +1 =0
    }
}
console.log(arr)

//Declarative 


arr1 = [-1, -3, -30, 54, 90, -1, 32, -15]
//This does not work(forEach)
// arr1.forEach((ele,i)=>{
//     if(ele<0){
//         arr1.splice(i,1);
//         i--;
//     }
//     return arr1
// })
function filterNeg(arr1){
    arr1=arr1.filter(ele => ele>0)
    console.log(arr1)
}

filterNeg(arr1)