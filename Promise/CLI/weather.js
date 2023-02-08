import axios from "axios";
import readLinesync from 'readline-sync';
let API_KEY = "a06f7a0d0fae7926aa6e13224d71923f"

// async function main(){
//     try{
//         let cityName = readLinesync.question("Enter the city name : ")
//         let response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)   
//         console.log(response.data);
    
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// main()



async function Celsius(cityName){
    try{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then((response)=>{
            console.log(response.data.main.temp)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }
    catch(error){
        console.log(error)
    }
}

Celsius("Delhi")