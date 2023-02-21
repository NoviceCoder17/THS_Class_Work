import chalk from "chalk";
import exp from "constants";
import fs from "fs/promises";
import readLineSync from "readline-sync";


async function userRegister() {
  try {
    console.clear();
    console.log(
      chalk.bgGreen("*************************************************")
    );
    console.log("\t\t User Registration  \t\t");
    console.log(
      chalk.green("*************************************************")
    );
    let name = readLineSync.question("Enter your name: ");
    while (!name) {
      let name = readLineSync.question("Please Enter your name: ");
    }
    let email = readLineSync.questionEMail("Enter your email: ");
    let password = readLineSync.question("Enter the Password:", {hideEchoBack: true});
    let confirmpassword = readLineSync.question("Re-enter your password", {hideEchoBack: true});
    if (password !== confirmpassword) {
      console.log( "Passwords do not match")
       password = readLineSync.question("Enter the Password:", {hideEchoBack: true});
         confirmpassword = readLineSync.question("Re-enter your password", {hideEchoBack: true});
    }
    let phoneNumber = readLineSync.questionInt("Enter your phone number: ");
    while(!phoneNumber){
        phoneNumber = readLineSync.questionInt("Please enter your phone number: ");
    }
    let address = readLineSync.question("Enter your address: ");
    //check for uniqueness in the DB
    let data = await fs.readFile("data.json");
    //console.log(data)
    data = JSON.parse(data)   // always make sure you are parsingwhen you read a file
   // console.log(data)
    let emailFound = data.find((ele) => ele.email == email);
    if (emailFound) {
      throw "Email already registered";
    }

    let userdata = {
      name,
      email,
      password,
      phoneNumber,
      address,
      todo: []
    };

    data.push(userdata);
    await fs.writeFile("data.json", JSON.stringify(data))
    console.log("User registered")

  } catch (error) {
    console.log(error);
  }
}

export { userRegister };
