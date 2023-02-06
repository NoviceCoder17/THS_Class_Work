//Chalk module uses ESM(ES6 is used), import is used
// require is common JS 
//shift from common js to ES6
// add this after scripts "type":"module" in package.json
//npm init -y(create package.json and package-lock.json )
// npm i will upate all the dependencies
// old programs with require cannot be run - throws an error

//import { questionInt } from 'readline-sync'
//export default {function}

import chalk from "chalk";
console.log(chalk.red("hello"))
console.log(chalk.bgBlue("hello"))
console.log(`
CPU: ${(chalk.red("90%"))}
RAM: ${(chalk.green("40%"))}
`)
console.log(chalk.rgb(0,0,255)("Prema"));
