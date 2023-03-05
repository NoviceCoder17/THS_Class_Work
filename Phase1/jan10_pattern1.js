/*

* * * * * 
* * * * 
* * * 
* * 
* 

*/

for(var i=5; i>=1; i--)
{
    let str = ""
    for(var j=1; j<=i; j++)
    {
    str += "* "
    }  
    console.log(str)
}

var str = "*****"
for(var i =5; i>0; i--){
    console.log(str)
    str= str.substring(0, i-1)
}

function dunnmy(){
    return
    console.log("hello")
}

let res= dunnmy();
console.log(res)