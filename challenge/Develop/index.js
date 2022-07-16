// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// const generateMarkDown = require ("./utilis/generateMarkdown");
// const choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
            name: 'Table of Contents',
            type: "input",
            message: "Pls provide table of Content?",
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

    ])
    .then((responses) => {
        console.log(responses)
        let responseReturn = JSON.stringify(responses)
        fs.appendFileSync("README.md", responseReturn);
    });

