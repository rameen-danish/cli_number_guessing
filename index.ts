#! /usr/bin/env node
import inquirer from "inquirer";

 const randomNumber = Math.floor(Math.random()*6+1);

const answers = await inquirer.prompt([
    {
        name:"userGuessedNUmber",
        type:"number",
        message:"Please guessed a number between 1 to 6."
    },
]);

if(answers.guessedNumbers === randomNumber)
{
    console.log("Congratulation ! You guessed right number");
}
else
console.log("You guessed wrong number");
