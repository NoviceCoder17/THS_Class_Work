// Promises have to be rejected or accepted
// How to consume a promise?
// Promise- value is not known- it might return something or nothing
// Ping to server, not sure what data we would get, we cannot use settimeout
// APi is send it promise to get some value
// .then is used to resolve a promise
// Resolve and rejected(.catch is used to get error)
// Some promises(API) takes too long 30/40s. 2mins to get data back- far away location of the server 
// Promises are async
// Axios is inbuilt, we can build custom promises
import axios from 'axios'
import fs from 'fs'

console.time()
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    console.log(res.data)
    // fs.writefile- creates a .json file 
    fs.writeFile("data1.json", JSON.stringify(res.data), (err) => {
        if (err) throw err;
        console.log("Data added to data1.json");
    })
    console.timeEnd()
})
.catch((err)=>{
    console.log(err)
}) 