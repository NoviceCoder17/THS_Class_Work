/*

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

for(var i=0; i<5; i++){
    console.log("* * * * *")
}

for(var i=0; i<5; i++){
    console.log("a b c d e")
}

var str = ""
for(var i=0; i<5; i++){
    str += "* "
    console.log(str)
}

var str = ""
for(var i = 1; i<10; i++){
   str = str + i
   console.log(str)
}

/*
1 * 8 + 1 = 9
12 * 8 + 2 = 98
123 * 8 + 3 = 987
1234 * 8 + 4 = 9876
12345 * 8 + 5 = 98765
123456 * 8 + 6 = 987654
1234567 * 8 + 7 = 9876543
12345678 * 8 + 8 = 98765432
123456789 * 8 + 9 = 987654321
*/
var str = ""
var str1 = "8"
for(var i = 1; i<10; i++){
    str = (str + i)
    str2= str * 8 + i
    console.log(`${str} * ${str1} + ${i} = ${str2}`)
 }
 
