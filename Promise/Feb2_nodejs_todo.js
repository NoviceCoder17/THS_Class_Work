import axios from "axios";
import fs from 'fs'
axios.get("https://jsonplaceholder.typicode.com/todos")
.then((res)=>{
    const pending = res.data.filter((ele) => ele.completed !== true);
    const completed = res.data.filter((ele) => ele.completed !== false);
    // Runs filter twice, takes more time
    // For loops take more time, high cost
    fs.writeFile("completed.json", JSON.stringify(completed), (err) => {
        if (err) throw err;
        console.log("Data added to completed.json");
    })
    fs.writeFile("pending.json", JSON.stringify(pending), (err) => {
        if (err) throw err;
        console.log("Data added to pending.json");
    })
})
.catch((err)=>{
    console.log(err)
})

