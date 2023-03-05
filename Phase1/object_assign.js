//Function takes objects are param 
// returns the number of keys/properties in the object

function keyInObj(Obj){
    keys1 =Object.keys(Obj);
    console.log[keys1];
    return keys1.length
}
var obj ={
    a : [9, 99, 999],
    b : [1,2,3,4,5],
    c : ["abc",{
        a: 11,
        b : 12,
    } ],
    d: "Prema",
    prema: {
        fullname: "shivarama",
        email : "p@gmail.com"
    },
    shiva:{
        lastname : "sm",
        email : "s@gmail.com"

    },
}
keys2=keyInObj(obj)
console.log(keys2)