#! /usr/bin/env node 
//Import inquirer & chalk
import chalk from "chalk";
import inquirer from "inquirer";
//--------------------------Dificult-----Questions---------------------------------------------------------------------------------------------------
let Q1 = "Question-1 What is TypeScript primarily used for?";
let Q2 = "Question-2 Which of the following is NOT a valid TypeScript data type?";
let Q3 = "Question-3 How do you denote a variable as readonly in TypeScript?";
let Q4 = "Question-4 How do you specify that a function does not return anything in TypeScript?";
let Q5 = "Question-5 How do you define a custom type in TypeScript?";
//--------------------------Easy-----Questions---------------------------------------------------------------------------------------------------
let Q6 = "Question-1 What keyword is used to declare a variable in TypeScript?";
let Q7 = "Question-2 Which data type is used to represent a sequence of characters in TypeScript?";
let Q8 = "Question-3 Which keyword is used to define a function in TypeScript?";
let Q9 = "Question-4 What is the keyword used to indicate that a variable may have a value of a specific type or null?";
let Q10 = "Question-5 Which symbol is used to declare the type of a variable in TypeScript?";
let CorrectAnswers = 0;
let incorrectAnswers = 0;
let getPlayerName = await inquirer.prompt([{
        name: "playerName",
        type: "input",
        message: chalk.blueBright("Enter your Name: ")
    }]);
let playerName = getPlayerName.playerName;
let Quiz = await inquirer.prompt([{
        name: "gamemode",
        type: "list",
        message: chalk.blueBright("Choose a Game Mode"),
        choices: ["Difficult", "Easy"]
    }]);
switch (Quiz.gamemode) {
    case "Difficult":
        //-------------------------Difficult Quiz Code--------------------------------------------------------------------
        let DifficultQuiz = await inquirer.prompt([{
                name: "question1",
                type: "list",
                message: chalk.blueBright("1. What is TypeScript primarily used for?"),
                choices: ["A. Memory Management", "B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"], // ans c
            },
            { name: "question2",
                type: "list",
                message: chalk.blueBright("2. Which of the following is NOT a valid TypeScript data type?"),
                choices: ["A. void", "B. any", "C. dynamic", "D. tuple"],
            },
            { name: "question3",
                type: "list",
                message: chalk.blueBright("3. How do you denote a variable as readonly in TypeScript?"),
                choices: ["A. const", "B. static", "C. readonly", "D. fixed"],
            },
            { name: "question4",
                type: "list",
                message: chalk.blueBright("4. How do you specify that a function does not return anything in TypeScript?"),
                choices: ["A. function myFunc(): undefined", "B. function myFunc(): void", "C. function myFunc(): null", "D. function myFunc(): None"], // ans b
            },
            { name: "question5",
                type: "list",
                message: chalk.blueBright("5. How do you define a custom type in TypeScript?"),
                choices: ["A. interface", "B. typedef", "C. type", "D. Both A and C"], //ans c
            }]);
        //-------------------------Difficult Quiz Code--------------------------------------------------------------------
        //------quistion 1 answer check--------//
        console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
        console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);
        if (DifficultQuiz.question1 === "C. Static Typing") {
            console.log(chalk.yellow.bold(` ${Q1} \n\n`) + chalk.green(`   Answer is Correct :  ${DifficultQuiz.question1}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q1} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : C : Static Typing \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 2 answer check--------//
        if (DifficultQuiz.question2 === "C. dynamic") {
            console.log(chalk.yellow.bold(` ${Q2} \n\n`) + chalk.green(`   Answer is Correct :  ${DifficultQuiz.question2}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q2} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : C : dynamic \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 3 answer check--------//  
        if (DifficultQuiz.question3 === "C. readonly") {
            console.log(chalk.yellow.bold(` ${Q3} \n\n`) + chalk.green(`   Answer is Correct :  ${DifficultQuiz.question3}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q3} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : C : readonly \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 4 answer check--------//  
        if (DifficultQuiz.question4 === "B. function myFunc(): void") {
            console.log(chalk.yellow.bold(` ${Q4} \n\n`) + chalk.green(`   Answer is Correct :  ${DifficultQuiz.question4}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q4} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : B : function myFunc(): void\n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 5 answer check--------//  
        if (DifficultQuiz.question5 === "D. Both A and C") {
            console.log(chalk.yellow.bold(` ${Q5} \n\n`) + chalk.green(`   Answer is Correct :  ${DifficultQuiz.question5}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q5} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : D : Both A and C\n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
        console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);
        /////Score Board////
        console.log(chalk.magentaBright.bold("-------------------------------"));
        console.log(chalk.green.bold("⭐-Correct Answer :"), CorrectAnswers);
        console.log(chalk.red.bold("⭐-Incorrect Answer :"), incorrectAnswers, "\n");
        console.log(chalk.magentaBright.bold(`Hello! ${playerName}  (Your scored : 0${CorrectAnswers} )`));
        console.log(chalk.magentaBright.bold("-------------------------------"));
        break;
    //------------------Difficult Mode Code ENDED---------------------------------------------------------
    case "Easy":
        //-------------------------Easy Quiz Code--------------------------------------------------------------------
        let easyQuiz = await inquirer.prompt([{
                name: "question6",
                type: "list",
                message: chalk.blueBright(Q6),
                choices: ["A) var", "B) let", "C) const", "D) def"], // ans D
            },
            { name: "question7",
                type: "list",
                message: chalk.blueBright(Q7),
                choices: ["A) number", "B) string", "C) boolean", "D) array"],
            },
            { name: "question8",
                type: "list",
                message: chalk.blueBright(Q8),
                choices: ["A) function", "B) def", "C) func", "D) fun"],
            },
            { name: "question9",
                type: "list",
                message: chalk.blueBright(Q9),
                choices: ["A) maybe", "B) any", "C) null", "D) undefined"] // ans b
            },
            { name: "question10",
                type: "list",
                message: chalk.blueBright(Q10),
                choices: ["A) :", "B) =", "C) ->", "D) =>"],
            }]);
        console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
        console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);
        //------quistion 1 answer check--------//
        if (easyQuiz.question6 === "B) let") {
            console.log(chalk.yellow.bold(` ${Q6} \n\n`) + chalk.green(`   Answer is Correct :  ${easyQuiz.question6}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q6} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : B) let \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 2 answer check--------//
        if (easyQuiz.question7 === "B) string") {
            console.log(chalk.yellow.bold(` ${Q7} \n\n`) + chalk.green(`   Answer is Correct :  ${easyQuiz.question7}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q7} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : B) string \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 3 answer check--------//  
        if (easyQuiz.question8 === "A) function") {
            console.log(chalk.yellow.bold(` ${Q8} \n\n`) + chalk.green(`   Answer is Correct :  ${easyQuiz.question8}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q8} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : A) function \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 4 answer check--------//  
        if (easyQuiz.question9 === "C) null") {
            console.log(chalk.yellow.bold(` ${Q9} \n\n`) + chalk.green(`   Answer is Correct :  ${easyQuiz.question9}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q9} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : C) null \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        //------quistion 5 answer check--------//  
        if (easyQuiz.question10 === "A) :") {
            console.log(chalk.yellow.bold(` ${Q10} \n\n`) + chalk.green(`   Answer is Correct :  ${easyQuiz.question10}\n`));
            CorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        else {
            console.log(chalk.red.bold(` ${Q10} \n\n  Answer is Incorrect :`) + chalk.green(` Correct Answer is : A) : \n`));
            incorrectAnswers++;
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }
        console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
        console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);
        /////Score Board////
        console.log(chalk.magentaBright.bold("-------------------------------"));
        console.log(chalk.green.bold("⭐-Correct Answer :"), CorrectAnswers);
        console.log(chalk.red.bold("⭐-Incorrect Answer :"), incorrectAnswers, "\n");
        console.log(chalk.magentaBright.bold(`Hello! ${playerName}  (Your scored : 0${CorrectAnswers} )`));
        console.log(chalk.magentaBright.bold("-------------------------------"));
        break;
    //---------------------Easy Mode Ended---------------------------------------------------------
}
