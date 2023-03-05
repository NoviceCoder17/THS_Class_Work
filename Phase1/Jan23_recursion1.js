function f(n) {
    if (n <= 1) return 1;
    if (n % 2 == 0) return f(n / 2);
    return f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1));
    }
    f(11);
    





// function table(x, y){
//     if(y==0) return
//     console.log(x*y)
//     table(2,y-1)
// }

// table(2,10)

// function table1(x, y){
//     if(y==0) return
//     console.log(x*y)
//     table(2,y-1)
// }

// table1(2,10)


// function table2(x,y){
//     if(y==0) return
//     table2(x, y-1)
//     console.log(x*y)
// }
// table2(2,10)

//RAM-Primary memory-all apps use 
//ROM- HDD/SSD- Secondary/permanent storage
//stack(temp memory),heap,data section(variabled), code section(all the code section)
//new keyword when used heap(On-demand memory)
//Why use stack? temp memory 

// function fun( x, y){
//     if (y == 0) return 0;
//     return (x + fun(x, y-1));
// }

// console.log(fun(3,4))


// function fun(n) {
//     if (n == 0 || n == 1) return n;
//     if (n % 3 != 0) return 0;
//     return fun(n / 3);
//     }

// console.log(fun(4))