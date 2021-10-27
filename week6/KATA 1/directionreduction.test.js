const dirReduc = require('./directionreduction');

describe('should handle simple cases', () => {
    it ('should return empty array if the input array is empty', () => {
        expect(dirReduc([])).toEqual([]);
    });

    it('should return one direction when input array has one direction', () => {
        expect(dirReduc(['NORTH'])).toEqual(['NORTH']);
    });
});