#! /usr/bin/env node

//import Chalk And Inquirer Pakages//
import chalk from "chalk";
import inquirer from "inquirer";

const curruncy: any = {
  USD: 1, //BASE CURRUNCY
  EUR: 0.93,
  INR: 83.37,
  PKR: 281.08,
};
console.log(curruncy);

let curruncyConverter: any = await inquirer.prompt([
  {
    name: "fromCurruncy",
    type: "list",
    choices: ["USD", "EUR", "INR", "PKR"],
    message: "Select a From curruncy",
  },
  {
    name: "toCurruncy",
    type: "list",
    choices: ["USD", "EUR", "INR", "PKR"],
    message: "Select a To curruncy",
  },

  {
    name: "convertAmount",
    type: "number",
    message: "Enter Your Converting Amount",
  },
]);

if (curruncyConverter.convertAmount > 0) {
  let fromCurruncy = curruncy[curruncyConverter.fromCurruncy];
  let toCurruncy = curruncy[curruncyConverter.toCurruncy];
  let convertedAmount = curruncyConverter.convertAmount;
  let curruncyConvert = (convertedAmount / fromCurruncy) * toCurruncy;
  const roundedNumber = Math.round(curruncyConvert * 100) / 100;

  switch (curruncyConverter.toCurruncy) {
    case "USD":
      console.log(
        chalk.green(`Your Converted Amount is ${roundedNumber} In USD`)
      );
      break;
    case "EUR":
      console.log(
        chalk.green(`Your Converted Amount is ${roundedNumber} In Euro`)
      );
      break;
    case "INR":
      console.log(
        chalk.green(
          `Your Converted Amount is ${roundedNumber} In Indian Rupees`
        )
      );
      break;
    case "PKR":
      console.log(
        chalk.green(
          `Your Converted Amount is ${roundedNumber} In Pakistani Rupees`
        )
      );
      break;
  }
} else {
  console.log(chalk.red("Enter Valid Amount"));
}


