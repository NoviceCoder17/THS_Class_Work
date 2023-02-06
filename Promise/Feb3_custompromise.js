//custom promise can be created by function or object
// Class called Promise

/*
1.Pending
2. Fulfilled
3. Rejected

 */

// Custom promise

function abc(num1, num2){
    return new Promise((resolve,reject)=>{
        if(num1<num2){
            resolve(`${num1} is less than ${num2}`)
        }
        else if(num1 >num2){
            resolve(`${num2} is less than ${num1}`)
        }
        else{
            reject("both are equal")
        }
    })
}

abc(55,55)
.then((msg)=>{
    console.log(msg)
})
.catch(err =>  console.log(err))