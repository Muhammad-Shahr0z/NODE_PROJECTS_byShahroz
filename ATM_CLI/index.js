#! /usr/bin/env node
//inquirer and chalk imported
import inquirer from "inquirer";
import chalk from "chalk";
//welcome note for User
console.log(chalk.greenBright.bold.italic.underline("\nWelcome to the Governor Sindh Bank Pvt Ltd"));
//default pinCode for 1st time use
let defaultPinCode = 1234;
console.log(`\nYour default PinCode is ${defaultPinCode}`);
//currunt account balance
let curruntBalance = 50000;
//this inquirer get pincode from user
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "pinCode",
        message: "Select your 4 Digits Pincode\n",
    },
]);
//checking user pin and default pin to lgin
if (answer.pinCode === defaultPinCode) {
    console.log(chalk.greenBright.bold.italic.underline("\nWelcome to your Account"));
    const Transactions = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Select your Transaction",
            choices: [
                "Fast Cash",
                "Withdraw",
                "CashDeposit",
                "BalanceInquiry",
                "Change_Pin",
            ],
        },
    ]);
    if (Transactions.select === "Fast Cash") {
        const transactionAmount = await inquirer.prompt([
            {
                type: "list",
                name: "amount",
                message: "Select your Amount",
                choices: ["5000", "10000", "20000", "50000"],
            },
        ]);
        // transactions Amount //
        if (transactionAmount.amount === "5000") {
            curruntBalance = curruntBalance - 5000;
            console.log(chalk.greenBright.bold.italic.underline("\nTransaction Successfull"));
            console.log(`Your Remaining Balance is ${curruntBalance}`);
        }
        if (transactionAmount.amount === "10000") {
            curruntBalance = curruntBalance - 10000;
            console.log(chalk.greenBright.bold.italic.underline("\nTransaction Successfull"));
            console.log(`Your Remaining Balance is ${curruntBalance}`);
        }
        if (transactionAmount.amount === "20000") {
            curruntBalance = curruntBalance - 20000;
            console.log(chalk.greenBright.bold.italic.underline("\nTransaction Successfull"));
            console.log(`Your Remaining Balance is ${curruntBalance}`);
        }
        if (transactionAmount.amount === "50000") {
            curruntBalance = curruntBalance - 50000;
            console.log(chalk.greenBright.bold.italic.underline("\nTransaction Successfull"));
            console.log(`\nYour Remaining Balance is ${curruntBalance}`);
        }
    }
    if (Transactions === "Withdraw") {
        const WithdrawAmount = await inquirer.prompt([
            {
                type: "number",
                name: "withdraw",
                message: "Enter your Amount",
            },
        ]);
    }
    //withraw amount//
    if (Transactions.select === "Withdraw") {
        const transactionAmount = await inquirer.prompt([
            {
                type: "number",
                name: "withdrawAmount",
                message: "Select your Amount",
            },
        ]);
        if (transactionAmount.withdrawAmount <= curruntBalance &&
            transactionAmount.withdrawAmount > 0) {
            curruntBalance = curruntBalance - transactionAmount.withdrawAmount;
            console.log(chalk.greenBright.bold.italic.underline("\nTransaction Successfull"));
            console.log(`\nYour Remaining Balance is ${curruntBalance}`);
        }
        else {
            console.log(chalk.redBright.bold.italic.underline("Insufficient Balance"));
        }
    }
    //deposit amount//
    if (Transactions.select === "CashDeposit") {
        const CashDeposit = await inquirer.prompt([
            {
                type: "number",
                name: "depositAmount",
                message: "Enter your Amount",
            },
        ]);
        curruntBalance = curruntBalance + CashDeposit.depositAmount;
        console.log(chalk.greenBright.bold.italic.underline("\nCash Added Successfull"));
        console.log(`\nYour Current Balance is ${curruntBalance}`);
    }
    //for balance inquiry//
    if (Transactions.select === "BalanceInquiry") {
        console.log(`\nYour Current Balance is ${curruntBalance}`);
    }
    //changePin
    if (Transactions.select === "Change_Pin") {
        const changePin = await inquirer.prompt([
            {
                type: "number",
                name: "newPin",
                message: "Enter your New Pin",
            },
        ]);
        if (changePin.newPin >= 1000 && changePin.newPin <= 9999) {
            defaultPinCode = changePin.newPin;
            console.log(chalk.greenBright.bold.italic.underline("\nPinCode Changed Successfull"));
            console.log(`\nYour New Pin is ${defaultPinCode}`);
        }
        else {
            console.log(chalk.redBright.bold.italic.underline("Enter Your Valid 4 Digits Pin Code "));
        }
    }
}
else {
    console.log(chalk.redBright.bold.italic.underline("Invalid PinCode"));
}
