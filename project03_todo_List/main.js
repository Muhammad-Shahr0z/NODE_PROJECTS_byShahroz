#! /usr/bin/env node
//IMPORT CHALK AND INQUIRER
import chalk from "chalk";
import inquirer from "inquirer";
//CREAT ARRAY FOR TO DO LIST & variable FOR TRUE AND FALSE
let todolist = [];
let loop = true;
console.log(chalk.green.bold.italic("\nWelCome To Our Todo-List App\n"));
while (loop) {
    console.log(chalk.green.bold("\nEnter Your List Item"));
    const answers = await inquirer.prompt([
        { type: "input", message: "Enter", name: "todolist" },
        {
            type: "list",
            message: "\nDo You Want To Add Another To Do List\n",
            name: "loop",
            choices: ["Yes", "No"],
        },
    ]);
    todolist.push(answers.todolist);
    console.log(todolist);
    if (answers.loop === "No") {
        loop = false;
    }
}
if (loop === false) {
    console.log(chalk.bgGreen("Your To Do List Is Ready"));
    const answers2 = await inquirer.prompt([
        {
            message: "Do You Want To Another Operations ?",
            type: "list",
            name: "view",
            choices: ["Delete Your To Do List", "View Your To Do List", "Exit"],
        },
    ]);
    if (answers2.view === "Delete Your To Do List") {
        let removeTodos = await inquirer.prompt([
            {
                message: "Remove Your To Do List",
                type: "list",
                name: "remove",
                choices: ["Remove", "Exit"],
            },
        ]);
        if (removeTodos.remove === "Exit") {
            console.log(chalk.bgBlue(`Thank You For Using Our App`));
        }
        if (removeTodos.remove === "Remove") {
            let confirmRemove = await inquirer.prompt([
                {
                    message: "Are You Sure To Remove Your To Do List Items ?\n",
                    type: "confirm",
                    name: "remove",
                    default: false,
                },
            ]);
            if (confirmRemove.remove === true) {
                todolist = [];
                console.log(chalk.bgBlue(`Your To Do List Is Removed\n`));
                let message = chalk.green(`Empty List\n`);
                console.log(todolist, message);
            }
            else {
                console.log(chalk.bgBlue(`Your To Do List Is Not Removed\n`));
                console.log(todolist);
            }
        }
    }
    else {
        console.log(chalk.blueBright("This Is Your List Items"));
        for (let i = 0; i < todolist.length; i++)
            console.log(chalk.bold.green(i + 1 + " - " + todolist[i]));
    }
}
