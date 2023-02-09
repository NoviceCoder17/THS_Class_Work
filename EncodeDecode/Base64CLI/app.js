import chalk from 'chalk'
import { questionInt, question } from "readline-sync";

function main() {
  console.log(chalk.green("*************************************************"));
  console.log("\t\ Base 64 CLI \t\t");
  console.log(chalk.green("*************************************************"));
  console.log(`
    1. Press 1 to select Base64 Encoding \n
    2. Press 2 to select Base64 Decoding \n
    0. Press 0 to Exit`);
  var inputValue = questionInt("Enter your choice: ");
  switch (inputValue) {
    case 0:
      console.log("Thank you for using our CLI, bye");
      return;
      break;
    case 1:
      break;
    case 2:
      break;
    default:
      console.log("Invalid Input");
      break;
  }
  var willContinue = question("Do you want to Continue? (Y/N)");
  if (
    willContinue == "y" ||
    willContinue == "Y" ||
    willContinue == "yes" ||
    willContinue == "Yes"
  ) {
    main();
  } else {
    console.log(
      chalk.bgGreenBright(
        "Thank you and See You Again!"
      )
    );
  }
}
main();
