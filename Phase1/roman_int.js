//CLI to convert from roman to integers and integers to roman

var introm = function romanToint(num){
let Obj={
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

var res = ''
for(let key in Obj){
    while(num >= Obj[key]){
        res += key        // res = XL
        num -= Obj[key]   // num = 49-40 =9
    }
}
return res
}
console.log(introm(490))
