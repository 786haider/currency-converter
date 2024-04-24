#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GPB: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAwnser = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.green.bold.italic("Enter your currency")),
        type: "list",
        choices: ["USD", "EUR", "GPB", "INR", "PKR"]
    },
    {
        name: "to",
        message: (chalk.green.bold.italic("Convert to ")),
        type: "list",
        choices: ["USD", "EUR", "GPB", "INR", "PKR"]
    },
    {
        name: "amount",
        message: (chalk.green.bold.italic("Enter your amount")),
        type: "number"
    }
]);
let fromAmount = currency[userAwnser.from];
let toAmount = currency[userAwnser.to];
let amount = userAwnser.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgBlueBright.bold.italic("Your converted amount is :"), convertedAmount);
