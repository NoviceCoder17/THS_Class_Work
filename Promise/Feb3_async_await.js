import axios from 'axios'
async function hitAPI(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res);
    }
    catch(error){
            console.log(error)
        }
}

hitAPI()

// await converts blocking to non bloacking
