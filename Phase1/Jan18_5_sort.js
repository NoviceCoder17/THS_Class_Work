var arr =["Abc0", "ABc", "BBc","AAA"]
console.log(arr)
arr.sort();
console.log(arr)
arr.sort().reverse()
console.log(arr)

var arrNum = [12,4,6,7,121,1000]
console.log(arrNum)
arrNum.sort();  // does not sort  from 2 digits, need to use a callback function
console.log(arrNum)

arrNum.sort((a,b)=>{
    return a-b  //bubblesort //compare function
    //return b-a 
})

console.log(arrNum)
//comparison is happening through unicodes

arrNum.sort(()=>0.5 - Math.random())
console.log(`after random sorting`, arrNum)