//Nested promise
import axios from "axios"
import readLineSync from "readline-sync"
console.time()

const num1 = readLineSync.questionInt("Enter Number 1 : ");
const num2 = readLineSync.questionInt("Enter Number 2 : ");

axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
    .then(res => {
        const sum1 = res.data.data
        console.log("The sum of first 2 numbers is : ", sum1)
        const num3 = readLineSync.questionInt("Enter Number 3 : ")

        axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${sum1}/${num3}`)
            .then(res => {
                const sum2 = res.data.data
                console.log("The sum of first 3 numbers is : ", sum2)
                const num4 = readLineSync.questionInt("Enter Number 4 : ")

                axios.get(`https://26fe-49-205-242-51.ngrok.iosdsadf/add/${sum2}/${num4}`)
                    .then(res =>{
                        const sum3 = res.data.data
                        console.log("The final sum is : ",sum3)
                        console.timeEnd()
                    }).catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    })
    .catch((err) => {
        console.log(err);
    })