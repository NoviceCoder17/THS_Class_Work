// Remove the negative values in an array - imperative approach(for loop)  and declarative(array helper) .map/filter

//IMPERATIVE approach

arr = [-1, -3, 5, -9, 10, 32,-15]
newArr =[]
function neg_remove(arr){
for(var i =0; i<arr.length; i++){
    if(arr[i]>0){
        newArr.push(arr[i])
    }  
    }
    console.log(newArr)
    
}
neg_remove(arr)


//DECLARATIVE approach

arr = [1234, -350, 35, -19, 100, 72,-15]
newArr=[]
arr.filter((element,i)=> {
    if(element>0){
        newArr.push(arr[i])
    }
    return newArr
});

console.log(newArr)

