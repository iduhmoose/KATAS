const dirReduc = require('./directionreduction');

describe('should handle simple cases', () => {
    it ('should return empty array if the input array is empty', () => {
        expect(dirReduc([])).toEqual([]);
    });

    it('should return one direction when input array has one direction', () => {
        expect(dirReduc(["NORTH"])).toEqual(["NORTH"]);
    });

    it('should cancel out opposing directions', () => {
        expect(dirReduc(["NORTH", "SOUTH"])).toEqual([]);
        expect(dirReduc(["SOUTH", "NORTH"])).toEqual([]);
        expect(dirReduc(["EAST", "WEST"])).toEqual([]);
        expect(dirReduc(["WEST", "EAST"])).toEqual([]);
    });

    it('should cancel out multiple opposing directions', () => {
        expect(dirReduc(["NORTH", "SOUTH", "WEST", "EAST"])).toEqual([]);
        expect(dirReduc(["SOUTH", "NORTH", "EAST", "WEST"])).toEqual([]);
        expect(dirReduc(["EAST", "WEST", "NORTH", "SOUTH",])).toEqual([]);
        expect(dirReduc(["WEST", "EAST", "SOUTH", "NORTH"])).toEqual([]);
        expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toEqual([]);
    });

    it('should keep the directions if it cannot be reduced', () => {
        expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual(["NORTH", "WEST", "SOUTH", "EAST"]);
        expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
    })
});