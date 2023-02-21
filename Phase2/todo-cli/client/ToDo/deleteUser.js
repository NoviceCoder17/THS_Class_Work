import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"


async function deleteUSer(email){
    try {
        console.clear()
        console.log(chalk.green("*************************************************"));
        console.log("\t\t Delete\t\t");
        console.log(chalk.green("*************************************************"));
    
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData)
        
        let userFound = fileData.find(ele => ele.email == email)
        let userFoundIndex = fileData.findIndex(ele => ele.email == email)
        if(!userFound){
            throw ("Some error Occured")
        }
        console.log(userFound)
        console.log(userFoundIndex)
        let newUserObj=[]
        newUserObj=fileData.splice(userFoundIndex,0)   
        console.log(newUserObj) 
        await fs.writeFile("data.json" , JSON.stringify(newUserObj));

        console.log(chalk.green("Delete"))
    
    } catch (error) {
        console.log(error);
    }

}

export default deleteUSer