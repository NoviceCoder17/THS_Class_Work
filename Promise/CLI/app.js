import readLineSync from "readline-sync";
import axios from "axios";
import chalk from "chalk";
import {
  Celsius,
  cityCoord,
  Fahrenheit1,
  getTime,
  hitAPI,
  sunRiseSunSet,
  minMax,
  Humidity,
} from "./helpers/index.js";
import { loading } from "./utils/index.js";
import { setTimeout } from "timers/promises";
let API_KEY = "a06f7a0d0fae7926aa6e13224d71923f";

async function main() {
  try {
    console.clear();
    console.log(
      chalk.yellowBright("*************************************************")
    );
    console.log("\t WEATHER  CLI \t\t");
    console.log(
      chalk.yellowBright("*************************************************")
    );
    const options = [
      "Exit the program",
      "City co-ordinates",
      "Live Temp in celsius ( \u2103 )",
      "Live temp in Fahrenheit ( \u2109 )",
      "Live temp in kelvin ( \u212A)",
      "Min and Max tempertaure",
      "Humidity",
      "UTC time", // No of seconds elapsed since Jan 1, 1970(computer time). Its epoch time- it chnages in ms
      "Display SunRise and sunset in UTC time",
    ];
    options.forEach((ele, i) => console.log(`Enter ${i} To ${ele}`));
    console.log(
      chalk.redBright("*************************************************")
    );
    let option = readLineSync.questionInt("Enter your choice: ");
    if (option < 0 || option >= options.length) {
      let spinner = loading("Invalid option, please try again.. %s");
      await setTimeout(2000);
      spinner.stop();
      return main();
    } 
    else {
      switch (option) {
        case 0:
          console.log("Thank you for using our CLI, bye");
          return
          break;
        case 1:
          await cityCoord();
          break;
        case 2:
          await Celsius(API_KEY);
          break;
        case 3:
          await Fahrenheit1(API_KEY);
          break;
        case 4:
          let response = await hitAPI(API_KEY);
          console.log(`Temp in Kelvin ${response.data.main.temp} \u212A`);
          break;
        case 5:
          await minMax(API_KEY);
          break;
        case 6:
          await Humidity(API_KEY);
          break;
        case 7:
          await getTime(API_KEY);
          break;
        case 8:
          await sunRiseSunSet(API_KEY);
          break;
        default:
          console.log("");
          break;
      }
      var willContinue = readLineSync.question("Do you wanna continue?");
      if (
        willContinue == "y" ||
        willContinue == "Y" ||
        willContinue == "yes" ||
        willContinue == "Yes"
      ) {
        let spinner = loading("Terminal loading.. %s");
        await setTimeout(2000);
        spinner.stop();
        return main();
      } else {
        console.log(
          chalk.bgGreenBright(
            "Thank you for Using our application for Matrices, See You Again!"
          )
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
}
main();
