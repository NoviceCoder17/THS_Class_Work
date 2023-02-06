import axios from 'axios'
import readLineSync from 'readline-sync'

function main(){
     const username = readLineSync.question("Enter your username:")
     console.log(username)
     axios.get(`https://api.github.com/users/${username}`)
     .then((res)=>{
        console.log(res.data.followers)  
       // console.log(res) // will console everything 
       // console.log(res.data) // There will be a data field which will be filtered
    })
    .catch((err)=>{
        console.log(err)
    }) 
}


main()