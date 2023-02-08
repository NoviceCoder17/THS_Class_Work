import axios from 'axios'
console.time("Block 1")
const sum = []
// await waits until hitAPI to return value- non blocking to vlocking- time taken will increase
// Some examples async await is not required always/used
// This gives orderly output

function hitAPI(num1,num2){
return axios.get(`https://696c-49-205-242-51.ngrok.io/add/${num1}/${num2}`)   
}

async function Main(){
    try{
        for(var i=0, j=5; i <=5, j<=10;i++ , j++){
            console.log(i, j);
            let res = await hitAPI(i,j)
            console.log(res.data.data);
            sum.push(res.data.data)
        }
        console.log(sum)
        console.timeEnd("Block 1")
    } catch(error){
        console.log(error)
  }
}
Main()