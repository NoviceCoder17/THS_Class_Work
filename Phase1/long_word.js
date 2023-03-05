function word_len(arr){
    var arr1=arr.split(" ")
    //console.log(arr1)
    var long_wrd="";
    for(var i=0;i<arr1.length;i++){
        if((arr1[i].length)>long_wrd.length){
        long_wrd=arr1[i]    
    }
    }
    return long_wrd
}
var len=word_len("This is ar555555raysclass atddddddddddddddddd44444 the ddg school");
console.log(len)
