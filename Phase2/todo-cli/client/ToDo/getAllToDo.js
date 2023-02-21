import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"


async function getAllToDo(email){
    try {
        console.clear()
        console.log(chalk.green("*************************************************"));
        console.log("\t\t List Todo \t\t");
        console.log(chalk.green("*************************************************"));
    
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData)
        
        let userFound = fileData.find(ele => ele.email == email)
        if(!userFound){
            throw ("Some error Occured")
        }
        console.log(chalk.blue("All To-Dos are listed below"))
        console.log(userFound.todo)
    } catch (error) {
        console.log(error);
    }

}

export default getAllToDo