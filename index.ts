#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; 
import showBanner from "node-banner"; 
import gradient from "gradient-string";

async function startCalculator() { await showBanner('WebCalculator', gradient.rainbow('This calculator can perform addition, multiplication, subtractions, and division operations.'));

while (true) {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: chalk.bgBlue("Enter your 1st Number:"),
            validate: (input) => {
                if (isNaN(input))
                    return gradient.rainbow("Kindly enter your number here:");
                return true;
            }
        },
        {
            type: "number",
            name: "num2",
            message: chalk.bgGray("Enter your 2nd Number:"),
            validate: (input) => {
                if (isNaN(input))
                    return gradient.rainbow("Kindly enter your number here:");
                return true;
            }
        },
        {
            type: "list",
            name: "operation",
            message: chalk.red("Select Operation"),
            choices: ["+", "-", "*", "/"],
        },
    ]);

    let result;
    if (answers.operation == "+") {
        result = answers.num1 + answers.num2;
        console.log(chalk.bold(chalk.greenBright("Sum =", result)));
    } else if (answers.operation == "-") {
        result = answers.num1 - answers.num2;
        console.log(chalk.bold(chalk.red("Subtract =", result)));
    } else if (answers.operation == "*") {
        result = answers.num1 * answers.num2;
        console.log(chalk.bold(chalk.blue("Multiply =", result)));
    } else if (answers.operation == "/") {
        result = answers.num1 / answers.num2;
        console.log(chalk.bold(chalk.green("Division =", result)));
    }

    const continuePrompt = await inquirer.prompt([
        {
            type: "confirm",
            name: "continue",
            message: "Do you want to perform another calculation?",
        },
    ]);

    if (!continuePrompt.continue) {
        break;
    }
}
}

startCalculator().catch((error) => { if (error.isTtyError) {
// Prompt couldn't be rendered in the current environment 
} else {  
// Something else went wrong 
    console.error(error); 
} });