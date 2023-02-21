// Install chalk,axios, readlie-sync, cli spinner

import fs from "fs/promises";
import readLineSync from "readline-sync";
import chalk from "chalk";
import { loading } from "../utils/index.js";
import { setTimeout } from "timers/promises";
import { createtodo } from "./createToDo.js";
import editTodo from "./editToDo.js";
import getAllToDo from "./getAllToDo.js";
import deleteUSer from "./deleteUser.js";


async function loggedIn(email) {
  try {
    console.clear();
    console.log(
      chalk.green("*************************************************")
    );
    console.log("\t\t TODO CLI \t\t");
    console.log(
      chalk.green("*************************************************")
    );
    const options = [
      "Exit The Program",
      "Create a Todo",
      "Edit to do",
      "List all To-do",
      "Delete User"
    ];
    options.forEach((ele, i) => console.log(`Enter ${i} To ${ele} `));
    console.log(
      chalk.green("*************************************************")
    );
    const option = readLineSync.questionInt(
      "Enter your option from the above menu : "
    );
    if (option < 0 || option >= options.length) {
      let spinner = loading(
        "Invalid Option.Please Try Again. Redirecting to menu ...."
      );
      return loggedIn(email);
    } else {
      switch (option) {
        case 0:
          console.log("Exiting , Bye");
          return;
        case 1:
            await createtodo(email)
          console.log("Create a Todo");
          break;
        case 2:
          await editTodo(email)
          console.log("Edit todo");
          break;
        case 3:
          await getAllToDo(email)
          console.log("List all to do");
          break;
          case 4:
          await deleteUSer(email)
          console.log("Delete user");
          break;
      }
      var willContinue = readLineSync.question(
        "Do you want to Continue? (Y/N) : "
      );
      if (
        willContinue == "y" ||
        willContinue == "Y" ||
        willContinue == "yes" ||
        willContinue == "Yes"
      ) {
        let spinner = loading("Redirecting to menu ....");
        await setTimeout(2000);
        spinner.stop();
        return loggedIn(email);
      } else {
        console.log(
          chalk.bgGreenBright(
            "Thank you for Using our TO do application , See You Again!"
          )
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export {loggedIn}