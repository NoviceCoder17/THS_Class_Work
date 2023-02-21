// Install chalk,axios, readlie-sync, cli spinner

import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"
import {loading} from "./utils/index.js"
import { setTimeout } from "timers/promises"
import { userRegister } from "./User/registerUser.js"
import { userLogin } from "./User/loginUser.js"
import editTodo from "./ToDo/editToDo.js"
//import { loggedIn } from "../ToDo/index.js"


//CRUD CLI
/*
Insert TODo
View Todo
Update Todo
Delete ToDo

*/

async function Main(){
    try {
        console.clear()
        console.log(chalk.green("*************************************************"));
        console.log("\t\t TODO CLI \t\t");
        console.log(chalk.green("*************************************************"));
        const options = [
            "Exit The Program", 'Create a User', 'Login', 'Delete Account'
        ]
        options.forEach((ele, i) => console.log(`Enter ${i} To ${ele} `))
        console.log(chalk.green("*************************************************"));
        const option = readLineSync.questionInt("Enter your option from the above menu : ")
        if (option < 0 || option >= options.length) {
            let spinner = loading("Invalid Option.Please Try Again. Redirecting to menu ....")
            await setTimeout(5000)
            spinner.stop("clean")
            return Main()
        } else {
            switch (option) {
                case 0:
                    console.log("Exiting , Bye")
                    return;
                case 1:
                    await userRegister()
                    //console.log("User Registration");
                    break;
                case 2:
                    await userLogin()
                    break;
                case 3:
                    console.log("User Deletion");
                    break;
            }
            var willContinue = readLineSync.question("Do you want to Continue? (Y/N) : ");
            if (willContinue == 'y' || willContinue == 'Y' || willContinue == "yes" || willContinue == "Yes") {
                let spinner = loading("Redirecting to menu ....")
                await setTimeout(2000)
                spinner.stop()
                return Main()
            } else {
                console.log(chalk.bgGreenBright("Thank you for Using our application , See You Again!"))
            }
        }
    } catch (error) {
        console.log(error);
    }
}

Main()