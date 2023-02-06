
//Var keyword assign it to the global - hey012345bye66666
// console.log('hey')
// for(var i=0;i<=5;i++){
//     console.log(i)
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }
// console.log('bye')

//let does not reassigne - o/p= 
// console.log('hey')
// for(let i=1;i<=5;i++){
//     console.log(i)
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }
// console.log('bye')

/*
Line 12
Line 10 
line 4
*/

// Set time out compounds- time

// setTimeout(()=>{
//     console.log("hey")
// },4000)
// var sum =0
// for(var i =0; i<=4; i++)
// {
//     setTimeout(()=>{
//         console.log("hey")
//     },0)
// }
// console.log(sum)
/*

Line 
1
3
5
7
9
11
14
16

Time 7S
4
40
40
40
40



*/


const arr = [10,20,30,40]
for(let i =0; i<4; i++)
{
    setTimeout(()=>{
        console.log(arr[i-1])
    },4000)
}
console.log(i)


/*
I am def*16
Ths bonus
I am efg
[10,20,30,40]
I am def
line 10
line 14


*/