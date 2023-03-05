/*
Add
Sub
Mul
Div
Modulo
Exponent/power **
*/

var a = 10;
var b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); 
console.log(234552344452 % 2);
console.log(2345523444521 % 2);
console.log(2**16)
console.log(16 ** (1/2))
console.log(27 **(1/3))
console.log(Math.sqrt(36))
console.log(Math.round(0.4))
console.log(Math.round(0.7));
console.log(Math.ceil(1.000001));
console.log(Math.floor(1.9999999999));
//Increment and decrement
// a++  Post increment  print and then increment
// ++a pre increment  decrement and then print

console.log(a++);
console.log(++a);

/*Compare

>
<
==
<=
>=
!=
===


*/
a= a > b
console.log(a);
console.log(a<b)
console.log(30 <= 30)
console.log(30 >=30)
console.log(30 > 30)
console.log(40 < (15*3))
console.log("100" == 10 ** 2)
console.log("100" === 10 ** 2)
console.log(Number("100")) // or console.log(+("100"))  + is used to type cast
console.log("100")
var c= "1000"
c += c; // concatenate
//console.log(c)
var c1= "1000"
c1= +c1 // type case
c1 +=c1
console.log(c1)

console.log(c)
console.log(true>false)
console.log(false >true)
console.log(undefined==0)  // Undefined converts to NaN so it returns to false
console.log("" === 0)    // False data type is not false
var a= 5, b= -3 , c = -6
console.log(c < b < c)    // -6 < -3 = 1 < -6 = false
console.log(c < b < a)    
console.log(c > b < a)
console.log(a > b < c)
console.log(b > a < c)
console.log(c < b < c)
console.log(typeof(300).toString());  // converts to a string
console.log("Spacessssssssssssssss\n ssssssssssssssssssss")
var b = "asfggg"
b = +b;
console.log(typeof(b));
console.log(b);




