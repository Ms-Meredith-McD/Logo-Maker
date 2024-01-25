const Triangle = require('../utils/triangle.js')


describe( 'Triangle', () => {
    describe ('Constructor', () =>{
        it('should create a new Triangle object with the provided properties', () => {
            const text = "MEM";
            const textColor = "purple";
            const shapeColor = "blue";

            const triangle = new Triangle(text, textColor, shapeColor);

            expect(triangle.text).toEqual(text);
            expect(triangle.textColor).toEqual(textColor);
            expect(triangle.shapeColor).toEqual(shapeColor);

            const finalTriangle = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

            expect(triangle.render()).toEqual(finalTriangle);
        });
    });
});