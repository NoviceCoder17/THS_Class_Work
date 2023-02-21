import axios from 'axios'

async function hitAPT(){
    try {
        let res= await axios.get("http://127.0.0.1:5000/")
        console.log(res.data)
    }
    catch(error){
        console.log(error)
    }
}
hitAPT()