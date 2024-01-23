const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate SVG file
const generateLogo = (text, textColor, shape, shapeColor) => {
    // Implement SVG generation logic here
    const svgContent = `<svg width="300" height="200">
    <!-- Your SVG elements based on user input -->
    </svg>`;

    // Write SVG content to logo.svg file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
};

// Inquirer prompts
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):',
        },
    ])
    .then(answers => {
        generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    })
    .catch(error => {
        console.error('Error:', error);
    });
