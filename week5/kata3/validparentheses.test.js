const validParentheses = require("./validparentheses");

describe('valid parentheses test', () => {
    it ('should not be valid if there is just one parentheses', () => {
        expect(validParentheses("")).toBe(true);
        expect(validParentheses("(")).toBe(false);
        expect(validParentheses(")")).toBe(false);
    });

    it ('should be valid if there is a pair of braces', () => {
        expect(validParentheses("()")).toBe(true);
        expect(validParentheses(")(")).toBe(false);
        expect(validParentheses("())")).toBe(false);
    });

    it ('should be valid if there is a pair of braces', () => {
        expect(validParentheses(")(()))")).toBe(false);
        expect(validParentheses("(())((()())())")).toBe(true);
    });
});