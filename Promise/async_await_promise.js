import axios from "axios"
import readLineSync from "readline-sync"

function hitAPI(num1, num2) {
    return axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
}

async function main() {
    try {
        console.time()
        const num1 = readLineSync.questionInt("Enter Number 1 : ");
        const num2 = readLineSync.questionInt("Enter Number 2 : ");
        const res1 = await hitAPI(num1 , num2)
        console.log("The sum1 is : ",res1.data.data)
        const num3 = readLineSync.questionInt("Enter Number 3 : ");
        const res2 = await hitAPI(res1.data.data , num3 );
        console.log("The sum2 is : ",res2.data.data);
        const num4 = readLineSync.questionInt("Enter Number 4 : ");
        const res3 = await hitAPI(res2.data.data , num4);
        console.log("The Final sum is : ", res3.data.data)
        console.timeEnd()

    } catch (error) {
        console.log(error);
    }
}
main()