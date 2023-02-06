// Rev string 

function rev(str){
      var rev= ""
      //console.log(str)
      for(var i=str.length-1; i>=0; i--){
            rev += str[i]   
      }
      return rev
 
}
console.log(rev("str1"))


// function rev1(str){
//     var str1= str.split()
//     for(var i=str.length-1; i>=0; i--){
//         var rev = str[i]
//     }

// }