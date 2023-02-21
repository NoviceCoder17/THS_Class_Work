import chalk from "chalk";
import fs from "fs/promises";
import readLineSync from "readline-sync";
import { loggedIn } from "../ToDo/index.js";

async function userLogin() {
  try {
    console.clear();
    console.log(
      chalk.bgGreen("*************************************************")
    );
    console.log("\t\t User Login  \t\t");
    console.log(
      chalk.green("*************************************************")
    );
    let email = readLineSync.questionEMail("Enter your email: ");
    let password = readLineSync.question("Enter your Login password: ");
    while (!password) {
      password = readLineSync.question("Enter a Valid Password : ", {
        hideEchoBack: true,
      });
    }

    let data = await fs.readFile("data.json");
    data = JSON.parse(data);
    let useremailFound = data.find((ele) => ele.email == email);
    if (!useremailFound) {
      throw chalk.red("User not Found / wrong email");
    }

    if (useremailFound.password !== password) {
      throw chalk.red("Unauthorized Access / wrong password");
    }
    console.log("User logged in successfully");
    await loggedIn(email);
  } catch (error) {
    console.log(error);
  }
}
export { userLogin };
