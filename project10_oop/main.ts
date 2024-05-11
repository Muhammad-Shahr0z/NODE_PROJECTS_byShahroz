#! /usr/bin/env node  

import inquirer from "inquirer";
import chalk from "chalk";

class Students {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let studentsArray: Students[] = [];
let conditions: boolean = true;

do {
  const Selectios = await inquirer.prompt({
    type: "list",
    name: "select",
    message: chalk.magentaBright.bold("\nselect an option:\n"),
    choices: ["Student", "View Student List", "Exit"],
  });

  if (Selectios.select === "Student") {
    const ask = await inquirer.prompt({
      type: "input",
      name: "name",
      message: chalk.cyanBright.bold(
        "Enter The Student Name You Want To Connect With :"
      ),
      validate: function (input) {
        if (input !== "") {
          return true;
        } else {
          return "Please Enter The Name";
        }
      },
    });


    ask.name = ask.name.toLowerCase().trim();
    let checkStudent = studentsArray.find((e) => e.name === ask.name);

    if (checkStudent) {
        console.log(  chalk.redBright.bold("\n\t   <<< Student Already Exists >>>"));
        console.log(chalk.yellow.bold("\n\tStudent List : \n"));
        for (let i = 0; i < studentsArray.length; i++) {
            console.log(
              chalk.green(
                `\t${i + 1}. ${
                  studentsArray[i].name.charAt(0).toUpperCase() +
                  studentsArray[i].name.slice(1).toLowerCase()
                }`
              )
            );
          }
    } else {
        console.log(  chalk.green.bold("\n\t     <<< NEW STUDENT ADDED >>>"));
        console.log(  chalk.green.bold("***************************************************"));
      let student = new Students(ask.name);
      console.log(
        chalk.green.bold(`\n\tHello i am `) +
          chalk.yellowBright(`" ${ask.name.toUpperCase()} "`) +
          chalk.green.bold(` Nice to Meet You\n`)
      );
      studentsArray.push(student);
    }
  } /*end*/ else if (Selectios.select === "View Student List") {
    if (studentsArray.length > 0) {
      console.log(chalk.yellow.bold("\n\tStudent List : \n"));
      for (let i = 0; i < studentsArray.length; i++) {
        console.log(
          chalk.green(
            `\t${i + 1}. ${
              studentsArray[i].name.charAt(0).toUpperCase() +
              studentsArray[i].name.slice(1).toLowerCase()
            }`
          )
        );
      }
    } else {
      console.log(chalk.red.bold("\n\tNo Student Found\n"));
    }
  } //end
  else {
    conditions = false;
    console.log(chalk.blue.bold("\nThank You For Using\n"));
  }
} while (conditions);
