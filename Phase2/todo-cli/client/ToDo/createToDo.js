import chalk from "chalk";
import fs from "fs/promises";
import { stringify } from "querystring";
import readLineSync from "readline-sync";
import randomstr from "../utils/randomStr.js";
async function createtodo(email) {
    try {
      console.clear();
      console.log(
        chalk.bgGreen("*************************************************")
      );
      console.log("\t\t Create a todo  \t\t");
      console.log(
        chalk.green("*************************************************")
      );

      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData)

      let userfound = fileData.find(ele => ele.email == email)
      if(!userfound){
        throw "Some internal error"
      }
      let todoName = readLineSync.question("Enter a todo name:")
      while(!todoName){
        todoName = readLineSync.question("Please enter a valid Todo name")
      }
      let tododata={
        todoName,
        iscompleted: false,
        task_id: randomstr(10)
      }
      console.log(tododata)
      userfound.todo.push(tododata)
      await fs.writeFile("data.json", JSON.stringify(fileData));
      console.log(chalk.green("task added successfully"))

    } 
    catch (error) {
    console.log(error);
    }
  }
  export { createtodo };
  
  