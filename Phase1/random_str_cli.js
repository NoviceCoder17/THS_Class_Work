/*
// Create a CLI application that has 3 Options:
// 1. Generate a Random String with only Alphabets i.e. A-Z a-z
// 2. Generate a Random String with Alphabets and Numbers A-Z a-z 0-9
// 3. Generate a Random String which has 1 Uppercase 1  Lowercase 1 Number and 1 Symbol ,
//    Do not Generate an Output if the length is less than 8.
// Once the User selects the option ask him for length and Print the Random String.
*/

import chalk from "chalk";
import { questionInt } from "readline-sync";
function ranCharABab(str_len) {
  if (str_len < 8) {
    console.log(`string length must be greater than 8`);
    return;
  }
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let ran_str = "";
  for (let i = 0; i < str_len; i++) {
    ran_str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ran_str;
}

function ranCharABab09(str_len) {
  if (str_len < 8) {
    console.log(`string length must be greater than 8`);
    return;
  }
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";
  let ran_str = "";
  for (let i = 0; i < str_len; i++) {
    ran_str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ran_str;
}

function ranChar(str_len) {
  if (str_len < 8) {
    console.log(`string length must be greater than 8`);
    return;
  }
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  let nums = "0123456789";
  let symbol = "$%&*^@!~";
  let ran_str = "";
  for (let i = 0; i < str_len; i++) {
    ran_str +=
      chars.charAt(Math.floor(Math.random() * chars.length)) +
      chars.charAt(Math.floor(Math.random() * chars.length)).toLowerCase() +
      nums.charAt(Math.floor(Math.random() * nums.length)) +
      symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
  return ran_str.slice(0, str_len);
}

function main() {
  console.log(chalk.blue("*************************************************"));
  console.log("\t Random string generator \t\t");
  console.log(chalk.blue("*************************************************"));

  console.log(`
    1. Press 1 to Random String with only Alphabets i.e. A-Z a-z\n
    2. Press 2 to Random String with only Alphabets i.e. A-Z a-z 0-9\n
    3. Press 3 to Random String with 1 Uppercase 1  Lowercase 1 Number and 1 Symbol\n
    0. Press 0 to Exit`);
  var inputValue = questionInt("Enter your choice: ");
  switch (inputValue) {
    case 0:
      console.log("Thank you for using our random generator CLI");
      return;
      break;
    case 1:
      let n = questionInt("Enter the string length: ");
      let random_str = ranCharABab(n);
      console.log(random_str);
      break;
    case 2:
      let n1 = questionInt("Enter the string length: ");
      let random_str1 = ranCharABab09(n1);
      console.log(random_str1);
      break;
    case 3:
      let n2 = questionInt("Enter the string length: ");
      let random_str2 = ranChar(n2);
      console.log(random_str2);
      break;
  }
}
main();
