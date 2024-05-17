#! /usr/bin/env node 

// INQUIRER AND CHALK IMPORTED

import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet"

// Star Coding // 

//function variable
let userFind;

class accountHolder { // Customer Class Start
    
fullName:string;     
age:number;
gender:string;
phone:number;
email:string;
password:string;
accountNumber:string;
accountBalance:number;


constructor(fullName:string,age:number, gender:string, phone:number, email:string, password:string,accountNumber:string,
    accountBalance:number){

this.fullName = fullName;
this.age = age;
this.gender = gender;
this.phone = phone;
this.email = email;
this.password = password;
this.accountNumber = accountNumber;
this.accountBalance = accountBalance;

}
} //  Customer Class Ended

/**************************************************************************************************************/
/*************                    *********************               *****************************************/
/*************                    *********************               *****************************************/
/**************************************************************************************************************/





// Initial Variables                          variables No//
let baseAccountDigits:number = 1000;
let baseIban:string   = "IBAN"             // Generate Random Account Number To assign Account Holder
let allAccounts:accountHolder[] = [];          // main array for all account holders 
let condition:boolean = true;                  // loop condition for loop running
let atmCharges:number = 1500;                  // ATM charges Deduction If account Successfully Created
/*******************************************************************/
let currentUserFname:string     ; // 01  Get value from inquirer
let currentAge:number           ; // 02  Get value from inquirer
let currentGender:string        ; // 03  Get value from inquirer
let currentPhone:number         ; // 04  Get value from inquirer
let currentEmail:string         ; // 05  Get value from inquirer
let currentPassword:string      ; // 06  Get value from inquirer
let currentBalance:number=0     ; // 07  Get value from inquirer
let RandomAccount: string       ; // 08  Get value From Assign value






do{ //// Loop Start ///
    
// Welcome To Governor Sindh Bank Pvt Ltd

console.log(chalk.greenBright.bold(figlet.textSync("Bank Application")))
console.log(chalk.yellowBright.bold("\nWelcome To Governor Sindh Bank Pvt Ltd\n"))


/************************************************************************************************** */


 /**************************** Inquirer For Select Options ******************************************/  

const selectoperation = await inquirer.prompt([{
    name:"selectOperation",
    type:"list",
    message:chalk.magentaBright("Select Your Operation"),
    choices:["Create Account","Login Account","Deposit","Exit"]},])




// This if Statement FOr Create a New Account  /// 
// Statement Start .........     
if(selectoperation.selectOperation === "Create Account"){ 
   
  

const createAccount = await inquirer.prompt([{
    name:"currentUserFname",                                 // inquirer for 01
    type:"input",
    message:chalk.yellow("Enter Your Full Name"), 
    validate: function(value) {
        // Regular expression to match only alphabetic characters, spaces, and ensure no numeric characters anywhere
        const isValid = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/.test(value);
        if (!isValid) {
            return chalk.red("Please enter a valid full name without numeric or special characters, and without spaces at the beginning or end.");
        }
        return true;
    }
},

{
    name:"currentAge",                                  // inquirer for 02
    type:"input",
    message:chalk.yellow("Enter Your Age"),
    validate: function(value) {
        // Regular expression to match only numeric characters and ensure no alphabetic characters anywhere
        const isValid = /^\d+$/.test(value);
        if (isValid && parseInt(value) >= 18 && parseInt(value) <= 60 ) {
            return true;
        }
        return "Please enter a valid age without alphabetic characters.";
    }
},

{
    name:"currentGender",                               // inquirer for 03
    type:"list",
    message:chalk.yellow("Enter Your Gender"),
    choices:["Male","Female"]
},

{
    name:"currentPhone",                                // inquirer for 04
    type:"input",
    message:chalk.yellow("Enter Your Mobile Number"),
  validate: function(value) {
      // Regular expression to match phone number format
      const Valid = /^\d+$/.test(value);
       // Checking the Mobile Number Already Exists in Array
    let  existsNumber = allAccounts.map(e=>e.phone).includes(value)
    if (existsNumber) {
        return "An account with this mobile number already exists.";
    // Regular expression to match only numeric characters and ensure no alphabetic characters anywhere
    }else if(Valid && value.length === 11) {
                 return true;
             }
    return "Please enter a valid phone number without alphabetic characters and must be 11 digits /.";
}
},

    {
    name:"currentEmail",                                // inquirer for 05
    type:"input",
    message:chalk.yellow("Enter Your Email Address"),
    validate: function(value) {
        // Regular expression to match email format
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isValid) {
            return "Please enter a valid email address.";
        }else if(allAccounts.map(e=>e.email).includes(value)) {
            return "An account with this email address already exists.";
        }
        return true;
    }
  
},

{
    name:"currentPassword",                             // inquirer for 06
    type:"input",
    message:chalk.yellow("Make Your Password"),
    validate: function(value) {
        // Regular expression to match password format
        const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        if (!isValid) {
            return "Please enter a valid password with at least 8 characters, including uppercase, lowercase, number and special character.";
        }
        return true;
    }
},

{
    name:"currentBalance",                              // inquirer for 07  // 
    type:"input",
    message:chalk.yellow("Deposit minimum 2000 Pkr To Create Your Account"),
    validate: function(value) {
        // Regular expression to match only numeric characters and ensure no alphabetic characters anywhere
        const isValid = /^\d+$/.test(value);
        if (isValid && parseInt(value) >= 2000) {
            return true;
        }
        return "Please enter a valid amount without alphabetic characters or Enter Min 2000 pkr.";
    }
}


])


//Variables Assigning //
/*******************************************************************/
currentUserFname     = createAccount.currentUserFname     // 01
currentAge           = createAccount.currentAge           // 02
currentGender        = createAccount.currentGender        // 03
currentPhone         = createAccount.currentPhone         // 04
currentEmail   = createAccount.currentEmail.toLowerCase() // 05
currentPassword      = createAccount.currentPassword      // 06
currentBalance       = eval( createAccount.currentBalance)// 07
/*******************************************************************/

// User Name Converted Into Title Case : 
let TitleCaseStep1 =currentUserFname.split(" ");
let TitleCaseStep2 = TitleCaseStep1.map(E=>E[0].toUpperCase()+E.substring(1).toLowerCase());
currentUserFname = TitleCaseStep2.join(" ");
/********************************************************************************************** */


// creating Account Number for Current User //
RandomAccount = baseIban + baseAccountDigits++;

// Deducting ATM Charges From Account Balance//
currentBalance = currentBalance -= atmCharges;

// Creating New Account User to Using Class constructor/
let createdAccount:accountHolder = new accountHolder(currentUserFname, currentAge, currentGender,
     currentPhone, currentEmail, currentPassword, RandomAccount, currentBalance)

     // Push Current User in All account Array Using Class Constructor//
     allAccounts.push(createdAccount)
    
  

    // Account Details and Created Account Status////
    console.log(chalk.cyan.bold(`\n-----------------------------------------------------`));
    console.log(chalk.green.bold("\t    Account Created Successfully"));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    console.log(chalk.yellowBright.bold("\t\tYour Account Details"));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    console.log(chalk.greenBright(`User Account Name             : ${currentUserFname}`));
    console.log(chalk.greenBright(`User Account Number           : ${RandomAccount}`));
    console.log(chalk.greenBright(`Deposit Amount                : ${createAccount.currentBalance}`));
    console.log(chalk.redBright(`ATM Charges Deducted          : ${atmCharges}`));
    console.log(chalk.greenBright(`Remaining Account Balance     : ${currentBalance}`));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    console.log(chalk.blueBright.bold("\n\t     Thanks For Using Our Service\n"));



    } // (Statement for New account Create )  Statement End ........
 /**********************************************************************************************/ 
 /****************************  New Create Account Statement Ended    **************************/ 
 /**********************************************************************************************/ 
 


 /**********************************************************************************************/ 
 /****************************  Login Account Statement Start    *******************************/ 
 /**********************************************************************************************/ 
 // This if Statement FOr login Your Account  /// 
 else if(selectoperation.selectOperation === "Login Account"){
     


// Function For Find Email in Array
     function findEmail(email:string){
      return allAccounts.find(account=>account.email === email)
     }

    console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    console.log(chalk.yellowBright.bold("\nLogin Your Account\n"));
    console.log(chalk.yellowBright.bold("Enter Your Email Address & Password\n"));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));

const loginAccount = await inquirer.prompt([
    {
        name: "loginEmail",                               // this inquirer ask login email
        type: "input",
        message:chalk.cyan("Enter Your Email Address"),
        validate: function(value) {
            // Regular expression to match email format
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if (!isValid) {
                return "Please enter a valid email address.";
            }
            return true;
        }
    },

    {   
    name:"loginPass",                       // this inquirer ask login password
    type:"input",
    message:chalk.cyan("Enter Your Password"),
    validate: function(value) {
        // Regular expression to match password format
        const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        if (!isValid) {
            return "Please enter a valid password .";
        }
        return true;
    }
    }
        
]);

let userEmail = loginAccount.loginEmail.toLowerCase();

// Login Account Email Validation ////
userFind = findEmail(userEmail);



/**************************************************************************************************** */
/****************************  Main Statement for Account Actions    ******************************** */
/**************************************************************************************************** */
if(userFind && userFind.password === loginAccount.loginPass ) {
console.log(chalk.cyan.bold(`\n-----------------------------------------------------`));
console.log(chalk.green.bold("\t          Login succeeded"));
console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    
    const accountAction = await inquirer.prompt([{
           name:"action",
           type:"list",
           message:"Select an Option",
           choices:["Account Details" , "Transfers" , "Easy Load", ]

    }])
    
    /**************************************************************************************************** */
    /****************************  Child -01 Statement for Account Details    *************************** */
    /**************************************************************************************************** */
    if(accountAction.action === "Account Details") {
        
        // Account Details Status////
        
        console.log(chalk.yellowBright.bold("\n\t\tYour Account Details"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.greenBright(`  Account Name            : ${userFind.fullName}`));
        console.log(chalk.greenBright(`  Account Number          : ${userFind.accountNumber}`));
        console.log(chalk.greenBright(`  Account Balance         : ${userFind.accountBalance}`));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    }
        
/**************************************************************************************************** */
/****************************  Child -02 Statement for Transfer   *************************** */
/**************************************************************************************************** */
else if(accountAction.action === "Transfers") {
    

    console.log(chalk.red.bold(`\n-------------------------------------------------`));
    console.log(chalk.greenBright.bold(`            Out Of Service`));
    console.log(chalk.red.bold(`-------------------------------------------------\n`));

    
   
}
     


/*transfer portion ended*/
/**************************************************************************************************** */
/****************************  Child -03 Statement for Account Actions    *************************** */
/**************************************************************************************************** */



else if(accountAction.action === "Easy Load"){

    const easyLoad = await inquirer.prompt([{
        name:"network",
        type:"list",
        message:"Select Your Network",
        choices:["Jazz" , "Telenor"]
        
    }])
    switch (easyLoad.network) {
        case "Jazz": 
        let Jass  = await inquirer.prompt([{
            name:"mobile",
            type:"input",
            message:"Enter Your Mobile Number"
        },
        {
            name:"amount",
            type:"input",
            message:"Enter Your Amount"
        }
    ])


    let loadJazz = Jass.amount; // load amount
    if(loadJazz > userFind.accountBalance) {
        console.log(chalk.redBright.bold("\n\t\tYour Easy Load Status"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.redBright(`  Your Easy Load Amount Exceed Your Account Balance`));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.blueBright.bold("\n\t     Thanks For Using Our Service\n"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));

    }else{     
        userFind.accountBalance = userFind.accountBalance - loadJazz;

        console.log(chalk.yellowBright.bold("\n\t\tYour Easy Load Status"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.greenBright(`  Easy Load Mobile Number  : ${Jass.mobile}`));
        console.log(chalk.greenBright(`  Easy Load Amount         : ${loadJazz}`));
        console.log(chalk.greenBright(`  Remaining Account Balance: ${userFind.accountBalance}`));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.blueBright.bold("\n\t     Thanks For Using Our Service\n"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        }
        break;
/**************************************************************************************************************************** */

        case "Telenor":
        let Telenor  = await inquirer.prompt([{
            name:"mobile",
            type:"input",
            message:"Enter Your Mobile Number"
        },
        {
            name:"amount",
            type:"input",
            message:"Enter Your Amount"
        }
    ])

    let loadTelenor = Telenor.amount; // load amount
    if(loadTelenor > userFind.accountBalance) {
        console.log(chalk.redBright.bold("\n\t\tYour Easy Load Status"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.redBright(`  Your Easy Load Amount Exceed Your Account Balance`));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.blueBright.bold("\n\t     Thanks For Using Our Service\n"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));

    }else{   
        userFind.accountBalance =  userFind.accountBalance - loadTelenor;

        console.log(chalk.yellowBright.bold("\n\t\tYour Easy Load Status"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.greenBright(`  Easy Load Mobile Number  : ${Telenor.mobile}`));
        console.log(chalk.greenBright(`  Easy Load Amount         : ${loadTelenor}`));
        console.log(chalk.greenBright(`  Remaining Account Balance: ${userFind.accountBalance}`));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        console.log(chalk.blueBright.bold("\n\t     Thanks For Using Our Service\n"));
        console.log(chalk.cyan.bold(`-----------------------------------------------------`));
        }
        break;

   /***************************************************************************************** */


   /****************************************************************************************************************** */
}






}






}else{////   Main Action Account Statement Else Block///
    console.log(chalk.red.bold(`-----------------------------------------------------`));
    console.log(chalk.red.bold(`-----------------------------------------------------`));
    console.log(chalk.redBright.bold("\n\t\    Login Failed\n"));
    console.log(chalk.red.bold(`-----------------------------------------------------`));
    // Main Action Account Statement ended//
}
}
/********************************************************************************************** */
 /****************************  Login Account Statement Ended    *******************************/
 /**********************************************************************************************/






 /**********************************************************************************************/ 
 /****************************  Deposit Statement Start    *******************************/ 
 /**********************************************************************************************/ 
 
 // This if Statement FOr login Your Account  /// 
 else if(selectoperation.selectOperation === "Deposit") {



let depositAmount = await inquirer.prompt([{
name:"iban",
type:"input",
message:"Enter Your Bank Account Number"

},

{
    name:"amount",
    type:"input",
    message:"Enter Your Amount",
    
    }

])

/*********************************************** */

let uppercaseWords = depositAmount.iban.toUpperCase();


function findiban(iban:string){
    return allAccounts.find(account=>account.accountNumber === iban)
}

let userFind = findiban(uppercaseWords);

if(userFind && userFind.accountNumber === uppercaseWords){

    userFind.accountBalance = userFind.accountBalance + eval(depositAmount.amount);

    console.log(chalk.yellowBright.bold("\n\t\tYour Deposit Status"));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    console.log(chalk.greenBright(`  Deposit Amount          : ${depositAmount.amount}`));
    console.log(chalk.greenBright(`  Current Account Balance: ${userFind.accountBalance}`));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));
    console.log(chalk.blueBright.bold("\n\t     Thanks For Using Our Service\n"));
    console.log(chalk.cyan.bold(`-----------------------------------------------------`));

}
else{
    console.log(chalk.red.bold(`-----------------------------------------------------`));
    console.log(chalk.redBright.bold(`             Please Enter Valid IBAN`));
    console.log(chalk.red.bold(`-----------------------------------------------------`));
 }

}

  /**********************************************************************************************/ 
 /****************************  Deposit Statement ended    *******************************/ 
 /**********************************************************************************************/
 



 /**********************************************************************************************/ 
 /****************************  Exit Statement Start    *******************************/ 
 /**********************************************************************************************/ 

// This if Statement FOr Exit  /// 
else if(selectoperation.selectOperation === "Exit") {
    condition = false; 
    console.log(chalk.redBright("\nThanks For Using Our Service\n"));}
 
 /**********************************************************************************************/ 
 /****************************  Exit Statement Ended   *******************************/ 
 /**********************************************************************************************/ 





}while(condition);