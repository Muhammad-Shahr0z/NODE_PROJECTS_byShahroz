#! /usr/bin/env node 


//import chalk and inquirer

import inquirer from "inquirer"
import chalk from "chalk"


const answer:{
    wordCounter:string
}  =await inquirer.prompt([{
type:"input",
name:"wordCounter",
message:"Enter Your Sentence To Count The Words"

}])



const removeWhiteSpace = answer.wordCounter.trim().split(" ")

if(answer.wordCounter === ""){
    console.log(chalk.bgRed("Please Enter A Valid Sentence"))
}else{
    
    console.log(chalk.bgBlue("Total Words Are: "+removeWhiteSpace.length));
}



    
