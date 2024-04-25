#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,
    PKR: 278,
    EUR: 0.94,
    INR: 83,
    GBP: 0.81,
    JPY: 154,
};

let answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Convert currency from:",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "PKR", "INR"]
        },
        {
            name: "to",
            message: "Convert currency to:",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "PKR", "INR"]
        },
        {
            name: "amount",
            message: "Please enter amount:",
            type: "number"
        }
    ]
);

if(answer.from === answer.to){
    console.log("Cannot convert the same currency.")
}

else{
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(`${amount } ${answer.from} equals ${convertedAmount} ${answer.to}.`);
};
