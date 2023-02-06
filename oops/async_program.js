/*
Event driven programming: Async programming
Promises: 
sync/blocking= one after the other- recursions- goes to next line only after the completion of previous line/Its an interpreter
Event loop/Aysnc loop/Non-blocking: Architecture of V8 engine works
/*
IN JS:
1. FCB function callbacks- setTimeOut(reserved function call backs)
2. Promises
3. async await
4. generators(not used much)
*/

// function abc(){
//     console.log("abc")
// }
// console.log('start')
// abc()
// setTimeout(()=>{  //setTimeout is a callback function, async
//     console.log("Welcome")
// },2000)   // This made it non-blocking 
// console.log(123)
// setTimeout(()=>{  //setTimeout is a callback function, async
//     console.log("Welcome1")
// },1000)

// Call stack, event loop, event queue
// After all the sync lines ae complete, async line will be executed

/*
I am first
I am first
I am Just getting started with adv. JS
I am third
I am just getting statted again

Hello
I am First
I am second
Hi
0
1
2
3
4
5
Bye
After 5S delay
0
1
2
3
4
5
*/


function getUser(){
    setTimeout(()=>{
        const ids =[10,20,30]
        console.log(ids)
        setTimeout((id)=>{
            const user={
                name : "Prema"
            }
        })




    })
}