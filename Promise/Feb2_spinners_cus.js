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
  setTimeout(()=>{
  axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {
      spinner.stop("clean");
      console.log(chalk.bgCyan(res.data.followers, "followers"));
    })
    .catch((err) => {
      spinner.stop("clean");
      console.error(err);   // we are logging the error
    })
},5000)
}

main();
