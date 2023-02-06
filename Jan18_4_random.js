// //Randomness
// //console.log(Math.random()); //Range 0-1(base, edge)
// //console.log(Math.random()+ 5 )// Moves base to 5
// // console.log(Math.random()* 10); //Edge has changed 
// // console.log(Math.floor(Math.random() * 16)); //without 0-15
// // console.log(Math.floor(Math.random() * 15) +1 ); //(1-15 including 15)


// function rollDice(){
//     var dice1=(Math.floor(Math.random() * 6) +1 )
//     var dice2=(Math.floor(Math.random() * 6) +1 )
//     if(dice1==dice2){
//         console.log("Out of jail");
//     }
//     else{
//         console.log("Try next time");
//     }
// }

// for(var index=0; index<100; index++){
//     rollDice()
// }

// //Create array in range 10-45

function randomArr(min,max){
    var arr=[]
    for(var index=0; index<10;index++){
    var value= (Math.floor(Math.random() * (max-min +1)) + min) 
    //var value= (Math.ceil(Math.random() * (max-min)) + min) 
        arr.push(value)
    }
    return arr
}

console.log(randomArr(10,45))

//no duplicate elements at all in the array
//Hint: .includes()

function randomArrNodup(min,max){
    var arr=[]
    for(var index=0; index<10;index++){
    var value= (Math.floor(Math.random() * (max-min +1)) + min) 
        if(!arr.includes(value)){
            arr.push(value)
        }     
    }
    return arr
}

console.log(randomArrNodup(10,45))