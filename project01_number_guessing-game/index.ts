#! /usr/bin/env node
import inquirer from "inquirer";

const Number: Number = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
      type: "number",
      name: "GuessNumber",
      message: "Guess one Number between 1-6 ",
  },
]);

if (answer.GuessNumber === Number) {
  console.log("Congratulations You guessed Right Number");
} else {
  console.log("sorry! You guessed wronge Number");
}
