function abc(age){
    console.log("hi");
    return new Promise((resolve, reject)=>{
            if(age>=19){
                resolve("you are a teen")
            }
            else{
                reject("you are a kid")
            }
    })
}
console.log("i am first")
abc(25)
.then((data)=>{
    console.log(data)
})
.catch(err => console.log(err))
console.log("I am last")

