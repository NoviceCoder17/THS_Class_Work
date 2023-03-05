// How to extract keys from an object
// How to extract all the values from an object
//There is for In loop - To extract keys of an object
var obj ={
    a : [9, 99, 999],
    b : [1,2,3,4,5],
    c : ["abc",{
        a: 11,
        b : 12,
    } ]
}
//console.log(obj)
for(key in obj){
    console.log(key)
}

for( key in obj){
    console.log(obj[key])
}

for( key in obj){
    console.log(key,obj[key])
}

var keys1 =Object.keys(obj)
console.log(keys1)

var vals =Object.values(obj)
console.log(vals);

// 