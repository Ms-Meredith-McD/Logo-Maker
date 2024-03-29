const Triangle = require('./utils/triangle.js')
const Square = require('./utils/square.js')
const Circle = require('./utils/circle.js')
const fs = require('fs');


const generateLogo = (text, textColor, shape, shapeColor) => {
    let svgContent;

    // Determine the shape and generate corresponding SVG
    switch (shape) {
        case 'circle':
            let circle = new Circle(text, textColor, shapeColor);
            svgContent = circle.render();
            break;
        case 'square':
            svgContent = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">   
            <rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`;
            break;
        case 'triangle':
            svgContent = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`;
            break;

        default:
            console.error('Invalid shape selected');
            return; // Exit the function if an invalid shape is selected
    }

    // Write SVG content to logo.svg file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
};

module.exports = generateLogo