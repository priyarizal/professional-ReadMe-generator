// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown");
// const choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'Title',
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: 'Description',
        type: "input",
        message: "What is the description of your project?",
    },
    {
        name: 'Instructions',
        type: "input",
        message: "Please provide instructions on how to use this project",
    },
    {
        name: 'Installation',
        type: "input",
        message: "How do we install your project?",
    },
    {
        name: 'Usage',
        type: "input",
        message: "how do we use your project?",
    },
    {
        name: 'License',
        type: "checkbox",
        message: "What liscense did you use?",
        choices: ["MIT", "ISC", "IBM", "GNU", "BSD"],
    },
    {
        name: 'Contributions',
        type: "input",
        message: "Who contributed on this project?",
    },

];
// .then((responses) => {
//     console.log(responses)
// });

function writeTofile(fileName, data) {
    fs.writeFile(fileName, generateMarkDown(data), (err) =>
        console.log(err)

    )
}

function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        writeTofile("README.md", responses);
    });
}

init();