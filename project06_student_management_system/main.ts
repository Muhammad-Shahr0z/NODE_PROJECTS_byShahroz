#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

class STUDENT {
  id: String;
  name: string;
  age: number;
  coursesEntrolled: string[];
  feeAmount: number;
  studentNumber: number;

  constructor(
    id: String,
    name: string,
    age: number,
    coursesEntrolled: string[],
    feeAmount: number,
    studentNumber: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.coursesEntrolled = coursesEntrolled;
    this.feeAmount = feeAmount;
    this.studentNumber = studentNumber;
  }
} //Class Scope END//

// VARIABLES
let baseId = 1000;
let GenrateId;
let enrollStudentLoop: boolean = true;
let students: STUDENT[] = [];
let studentFee: number = 0;
let studentCount = 0;
let curruntBalance = 10000;

do {
  console.log(chalk.green.bold("************************************"));

  console.log(chalk.yellowBright.bold("Welcome to Student Management System"));

  console.log(chalk.green.bold("************************************"));
  let selectAction = await inquirer.prompt({
    type: "list",
    name: "ans",
    message: chalk.yellow("Please Select an Option:"),
    choices: ["Enroll a Student", "View Student Status", "Balance Inquiry"],
  });

  if (selectAction.ans === "Enroll a Student") {
    let studentName = await inquirer.prompt([
      {
        type: "input",
        name: "firsName",
        message: chalk.cyanBright.bold("Enter Your First Name :"),
        validate: (input: string) => {
          if (input !== "" && !/\d/.test(input)) {
            return true;
          }
          return "Please enter a valid name without numeric values.";
        },
      },

      {
        type: "input",
        name: "lastName",
        message: chalk.cyanBright.bold("Enter Your Last Name :"),
        validate: (input: string) => {
          if (input !== "" && !/\d/.test(input)) {
            return true;
          }
          return "Please enter a valid name without numeric values.";
        },
      },

      {
        // AGE
        type: "input",
        name: "age",
        message: chalk.cyanBright.bold("Enter Your Age:"),
        validate: (input) => {
          if (input >= 4 && input <= 60 && input !== "") {
            return true;
          }
          return "Please enter a valid age between 04 To 60.";
        },
      },
    ]);

    let concatinateName = studentName.firsName.trim() + " " + studentName.lastName.trim();
    let inputName = concatinateName.trim().toLowerCase();
    let checkStudent = students.map((sname) => sname.name);

    if (checkStudent.includes(inputName) === false) {
      // Courses Statments
      let CoursesSelect = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Select Course:",
        choices: ["TypeScript", "Java", "Python", "JavaScript"],
      });

      switch (CoursesSelect.ans) {
        case "TypeScript":
          studentFee = 2000;
          curruntBalance -= studentFee;
          break;
        case "Java":
          studentFee = 2500;
          curruntBalance -= studentFee;
          break;
        case "Python":
          studentFee = 3000;
          curruntBalance -= studentFee;
          break;
        case "JavaScript":
          studentFee = 4000;
          curruntBalance -= studentFee;
          break;
        default:
          console.log(chalk.red.bold("Invalid Course"));
          break;
      }
      GenrateId = "SID" + baseId++;
      studentCount++;


    let Studentarrays = new STUDENT(
      GenrateId,
      inputName,
      studentName.age,
      CoursesSelect.ans,
      studentFee,
      studentCount
    );

      students.push(Studentarrays);

      console.log(chalk.grey.bold("************************************"));
      console.log(chalk.green.bold("\nStudent Enrolled Successfully\n"));
      console.log(chalk.grey.bold("************************************"));
    } else {
      console.log(chalk.red.bold("Student Already Exists"));
    }
  } //Enroll Student Loop End//
  else if (selectAction.ans === "View Student Status") {
    if (students.length !== 0) {
      let StudentList = students.map((sname) => sname.name);

      let StudentnameList = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Select Student:",
        choices: StudentList,
      });

      students.forEach((student) => {
        if (student.name === StudentnameList.ans) {
          let titleCase = student.name
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
            )
            .join(" ");
          console.log(
            chalk.yellow.bold(
              `\t\t\t\t\t\t\t\t\t      Student ${student.studentNumber} Status`
            )
          );
          console.log(
            chalk.green.bold(
              "\t\t\t\t\t\t\t\t    ************************************"
            )
          );
          console.log(
            chalk.magentaBright.bold(
              `\t\t\t\t\t\t\t\t\t       ${titleCase}              `
            )
          );
          console.log(
            chalk.green.bold(
              "\t\t\t\t\t\t\t\t    ************************************"
            )
          );

          console.log(
            chalk.green.bold("\t\t\t\t\t\t\t\t\tStudent Name: ") +
              chalk.yellowBright(titleCase)
          );
          console.log(
            chalk.green.bold("\t\t\t\t\t\t\t\t\tStudent Age: ") +
              chalk.yellowBright(student.age)
          );
          console.log(
            chalk.green.bold("\t\t\t\t\t\t\t\t\tStudent Course : ") +
              chalk.yellowBright(student.coursesEntrolled)
          );
          console.log(
            chalk.green.bold("\t\t\t\t\t\t\t\t\tStudent Fee: ") +
              chalk.yellowBright(student.feeAmount)
          );
          console.log(
            chalk.green.bold("\t\t\t\t\t\t\t\t\tStudent ID: ") +
              chalk.yellowBright(student.id)
          );
          console.log(
            chalk.green.bold("\t\t\t\t\t\t\t\t\tStudent Remaining Balance: ") +
              chalk.yellowBright(curruntBalance)
          );
        }
      });
    } else {
      console.log(chalk.red.bold("No Student Found"));
    }
  } // condition ended
  else if (selectAction.ans === "Balance Inquiry") {
    console.log(chalk.yellow.bold(`\n\t\t\t\t\t\t\t\t\t   Student Status\n`));
    console.log(
      chalk.green.bold("\t\t\t\t\t\t\t\t\tCurrent Balance: ") +
        chalk.blue(curruntBalance)
    );
  }

  //  This Inquirer use to Stop and Start the Loop//

  let Confirm = await inquirer.prompt({
    type: "confirm",
    name: "ans",
    message: "Do You Want To Perform Another Operations ?",
  });

  enrollStudentLoop = Confirm.ans;
} while (enrollStudentLoop);
