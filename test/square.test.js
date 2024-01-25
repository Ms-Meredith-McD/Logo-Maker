const Square = require('../utils/square.js')


describe( 'Square', () => {
    describe ('Constructor', () =>{
        it('should create a new Square object with the provided properties', () => {
            const text = "MEM";
            const textColor = "purple";
            const shapeColor = "blue";

            const square = new Square(text, textColor, shapeColor);

            expect(square.text).toEqual(text);
            expect(square.textColor).toEqual(textColor);
            expect(square.shapeColor).toEqual(shapeColor);

            const finalSquare = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`

            expect(square.render()).toEqual(finalSquare);
        });
    });
});