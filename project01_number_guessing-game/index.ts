#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber: number = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "GuessNumber",
    message: "Guess one Number between 1-6 ",
  },
]);

if (answer.GuessNumber === randomNumber) {
  console.log("Congratulations You guessed Right Number");
} else {
  console.log("sorry! You guessed wronge Number");
}

console.log(`Random Number is  ${randomNumber}`);
