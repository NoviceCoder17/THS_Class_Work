import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"


async function editTodo(email){
    try {
        console.clear()
        console.log(chalk.green("*************************************************"));
        console.log("\t\t Edit a Todo \t\t");
        console.log(chalk.green("*************************************************"));
    
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData)
        
        let userFound = fileData.find(ele => ele.email == email)
        if(!userFound){
            throw ("Some error Occured")
        }
        console.log(userFound)

        let todoId = readLineSync.question("Enter the unique id of the task : ")
        let taskFound = userFound.todo.find(ele => ele.task_id == todoId);
        console.log(taskFound)
        if(!taskFound){
            console.log("The Task was not found / doensn't exist")
            return
        }

        let option = readLineSync.questionInt("Enter 1 to change task name , enter 2 to change task status : ")
        if(option == 1){
            let newTaskName = readLineSync.question("Enter the new Task Name : ")
            taskFound.todoName = newTaskName
        }else if(option == 2){
            let newStatus = readLineSync.question("Enter Y/yes for completed task : ")
            if(newStatus == 'Y' || newStatus == "y" || newStatus == 'yes'){
                taskFound.iscompleted = true
            }
        }else {
            console.log("wrong input")
            return
        }

        
        await fs.writeFile("data.json" , JSON.stringify(fileData));

        console.log(chalk.green("Task edited Successfully"))
    
    } catch (error) {
        console.log(error);
    }

}


export default editTodo