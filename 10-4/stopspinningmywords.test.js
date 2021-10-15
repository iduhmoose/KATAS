const spinWords = require("./stopspinningmywords");

describe("empty string", () => {
    it ('should return empty string', () => {
        expect(spinWords("")).toEqual("");
    });

    it ('should reverse a word < 5 characters', () => {
        expect(spinWords("brak")).toEqual("brak");
    });

    it ('should reverse a word >= 5 characters', () => {
        expect(spinWords("brake")).toEqual("ekarb");
        expect(spinWords("brakee")).toEqual("eekarb");
    });

    it ('should return a sentence with words < 5 characters', () => {
        expect(spinWords("This is a test")).toEqual("This is a test");
    });

    it('should return a sentence with reversed words >= 5 characters', () => {
        expect(spinWords("You are almost to the last test")).toEqual("You are tsomla to the last test");
    });
});