function isVowel1(str1){
    var count =0
    //var str1= str.toLowercase
    for(var i = 0; i<=str1.length-1; i++){
        if((str1.charAt(i) == "a") || (str1.charAt(i) == "e") || (str1.charAt(i) == "i")|| (str1.charAt(i) == "o")|| (str1.charAt(i) == "u") || (str1.charAt(i) == "A") || (str1.charAt(i) == "E") || (str1.charAt(i) == "I")|| (str1.charAt(i) == "O")|| (str1.charAt(i) == "U"))
        {
           //console.log(str1.charAt(i)) 
            count++
        }
    }
    return count;
}
let val1 = isVowel1("qieremua")
console.log(val1)
let val2= isVowel1("PRemaUa")
console.log(val2)

