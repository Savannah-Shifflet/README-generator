const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input using inquirer formatting
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub repository? Use dashes, no spaces',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines for your project.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide examples on how to run tests for your application.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please choose which license you used for this project.',
        name: 'license',
        choices: ['No license was used', 'Apache License 2.9', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0','GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address someone can reach you at to ask questions.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to reach you for additional questions.',
        name: 'question'
    }
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (error) => error ? console.error(error) : console.log('Answers logged!') );
}

// Initializes app in console
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile(response.title, generateMarkdown(response)))
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();
