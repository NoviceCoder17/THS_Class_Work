// write all the functions here for app.js

import readLineSync from "readline-sync";
import axios from "axios";
import chalk from "chalk";
import { readFile } from "fs/promises";
import { loading } from "../utils/index.js";

async function cityCoord() {
  try {
    let data = await readFile("cities.json");
    data = JSON.parse(data);
    let city = readLineSync.question("Enter your city: ");
    let result = data.find((ele) => {
      let cityName = ele.name;
      cityName = cityName.toLowerCase();
      city = city.toLowerCase();
      return city === cityName;
    });
    console.log(result.lat);
    console.log(result.lng);
  } catch (error) {
    console.log(error);
  }
}

async function Celsius(API_KEY) {
  try {
    let cityName = readLineSync.question("Enter your city: ");
    let spinner = loading("Searching....");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        spinner.stop("clean");
        console.log(`Temp in Celsius ${response.data.main.temp} \u2103 `);
      });
  } catch (error) {
    console.log(error);
  }
}

async function Fahrenheit1(API_KEY) {
  try {
    let cityName = readLineSync.question("Enter your city: ");
    let spinner = loading("Searching....");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`
      )
      .then((response) => {
        spinner.stop("clean");
        console.log(`Temp in Fahrenheit ${response.data.main.temp} \u2109 `)
      });
  } catch (error) {
    console.log(error);
  }
}

function hitAPI(API_KEY) {
  let cityName = readLineSync.question("Enter your city: ");
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
  );
}

async function getTime(API_KEY) {
  try {
    let cityName = readLineSync.question("Enter your city: ");
    let spinner = loading("Searching....");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      )
      .then((response) => {
        spinner.stop("clean");
        let timeEpoc = response.data.dt;
        let currentDate = new Date(timeEpoc * 1000);
        console.log(currentDate);
      });
  } catch (error) {
    console.log(error);
  }
}

async function sunRiseSunSet(API_KEY) {
  try {
    let cityName = readLineSync.question("Enter your city: ");
    let spinner = loading("Searching....");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      )
      .then((response) => {
        spinner.stop("clean");
        let timeEpoc_SR = response.data.sys.sunrise;
        let timeEpoc_SS = response.data.sys.sunset;
        let currentSR = new Date(timeEpoc_SR * 1000);
        let currentSS = new Date(timeEpoc_SS * 1000);
        console.log(`Sunrise: ${currentSR}`);
        console.log(`Sunset: ${currentSS}`);
      });
  } catch (error) {
    console.log(error);
  }
}

async function minMax(API_KEY) {
  try {
    let cityName = readLineSync.question("Enter your city: ");
    let spinner = loading("Searching....");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        spinner.stop("clean");
        console.log(`Min temp is ${response.data.main.temp_min} \u2103`);
        console.log(`Max temp is ${response.data.main.temp_max} \u2103`);
      });
  } catch (error) {
    console.log(error);
  }
}

async function Humidity(API_KEY) {
  try {
    let cityName = readLineSync.question("Enter your city: ");
    let spinner = loading("Searching....");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      )
      .then((response) => {
        spinner.stop("clean");
        console.log(`Humidity: ${response.data.main.humidity}`);
      });
  } catch (error) {
    console.log(error);
  }
}

let currentEpoch = Date.now();
let currentDate = new Date(currentEpoch);
console.log(currentDate);
//T and Z which shows its in UTC

export {
  cityCoord,
  Celsius,
  Fahrenheit1,
  hitAPI,
  getTime,
  sunRiseSunSet,
  minMax,
  Humidity,
};
