#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Choose One Operator To Perform Operation",
        type: "list",
        name: "Operator",
        choices: ["Division", "Multiplication", "Addition", "Subtraction"],
    },
]);
if (answer.Operator === "Division") {
    console.log(`Result is ${answer.firstNumber / answer.secondNumber} `);
}
else if (answer.Operator === "Multiplication") {
    console.log(`Result is ${answer.firstNumber * answer.secondNumber} `);
}
else if (answer.Operator === "Addition") {
    console.log(`Result is ${answer.firstNumber + answer.secondNumber} `);
}
else if (answer.Operator === "Subtraction") {
    console.log(`Result is ${answer.firstNumber - answer.secondNumber} `);
}
else {
    console.log("Pleas Enter Valid Number or Oprator ");
}
