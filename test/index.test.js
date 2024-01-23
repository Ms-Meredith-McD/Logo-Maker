const fs = require('fs');
const generateLogo = require('./index');

// Mock console.log to test its output
console.log = jest.fn();

test('Generate Logo', () => {
    generateLogo('ABC', 'red', 'circle', 'blue');
    const logoContent = fs.readFileSync('logo.svg', 'utf-8');
    expect(logoContent).toContain('<svg width="300" height="200">');
    expect(console.log).toHaveBeenCalledWith('Generated logo.svg');
});
