#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guessed a number between 1 to 6."
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! You guessed right number.");
}
else
    console.log(`You guessed wrong number.The correct number is ${randomNumber}`);
