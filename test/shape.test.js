const Shape = require('../utils/shape.js')

describe( 'Shape', () => {
    describe ('Constructor', () =>{
        it('should create a new Shape object with the provided properties', () => {
            const text = "MEM";
            const textColor = "purple";
            const shapeColor = "blue";

            const shape = new Shape(text, textColor, shapeColor);

            expect(shape.text).toEqual(text);
            expect(shape.textColor).toEqual(textColor);
            expect(shape.shapeColor).toEqual(shapeColor);
        });
    });
});
