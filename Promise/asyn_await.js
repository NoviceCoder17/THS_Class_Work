// Spinner on terminal
// we can use https://www.npmjs.com/package/cli-spinner

import { Spinner } from "cli-spinner";
import axios from "axios";
import readLineSync from "readline-sync";
import chalk from "chalk";

function main() {
  const username = readLineSync.question(chalk.red("Enter your username:"));
  var spinner = new Spinner(chalk.blue("Terminal loading.. %s"));
  spinner.setSpinnerString("|/-\\");
  spinner.start();
  setTimeout(async ()=>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        spinner.stop("clean");
        console.log(chalk.bgCyan(res.data.followers, "followers"));
    }
    catch(error){
        spinner.stop("clean");
        console.log(err);  
        }
},5000)
}

main();
