const Circle = require('../utils/circle.js')


describe( 'Circle', () => {
    describe ('Constructor', () =>{
        it('should create a new Circle object with the provided properties', () => {
            const text = "MEM";
            const textColor = "purple";
            const shapeColor = "blue";

            const circle = new Circle(text, textColor, shapeColor);

            expect(circle.text).toEqual(text);
            expect(circle.textColor).toEqual(textColor);
            expect(circle.shapeColor).toEqual(shapeColor);

            const finalCircle = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`;

            expect(circle.render()).toEqual(finalCircle);
        });
    });
});