
let str = "blahaabalhaaabblahh"

function countCharOcc(str){
    // str = str.split("")
    // console.log(str)
    var result =((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
    console.log(result);

}

console.log(countCharOcc(str))