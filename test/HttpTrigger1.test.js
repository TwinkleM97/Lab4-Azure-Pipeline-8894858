const { expect } = require('chai');
const { getGreeting } = require('../HttpTrigger1/index');

describe('HttpTrigger1 Tests', () => {
    it('should return personalized greeting when name is provided', () => {
        const name = 'Azure';
        const expected = 'Hello, Azure! This Node.js Azure Function is working correctly.';
        const result = getGreeting(name);
        expect(result).to.equal(expected);
    });

    it('should return default greeting when name is empty', () => {
        const name = '';
        const expected = 'Hello, World! This Node.js Azure Function is working correctly.';
        const result = getGreeting(name);
        expect(result).to.equal(expected);
    });

    it('should return default greeting when name is null', () => {
        const name = null;
        const expected = 'Hello, World! This Node.js Azure Function is working correctly.';
        const result = getGreeting(name);
        expect(result).to.equal(expected);
    });

    it('should return default greeting when name is undefined', () => {
        const name = undefined;
        const expected = 'Hello, World! This Node.js Azure Function is working correctly.';
        const result = getGreeting(name);
        expect(result).to.equal(expected);
    });
});
