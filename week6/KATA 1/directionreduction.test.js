const dirReduc = require('./directionreduction');

describe('should handle simple cases', () => {
    it ('should return empty array if the input array is empty', () => {
        expect(dirReduc([])).toEqual([]);
    });
});