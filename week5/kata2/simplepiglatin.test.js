const pigIt = require("./simplepiglatin");

describe("test cases", () => {
    it ("should return an empty string if null is passed in", () => {
        expect(pigIt()).toBe("");
    });

    it ("should transform one lowercase word", () => {
        expect(pigIt("hello")).toBe("ellohay");
    });

    it ("should transform one uppercase word", () => {
        expect(pigIt("Hello")).toBe("elloHay");
    });

    it ("should transform a mixed sentence", () => {
        expect(pigIt("Hello there")).toBe("elloHay heretay");
    });

    it ("should transform a mixed sentence with punctuation", () => {
        expect(pigIt("Hello there!")).toBe("elloHay here!tay");
    });

    it ("should transform a mixed sentence with punctuation", () => {
        expect(pigIt("Hello there !")).toBe("elloHay heretay !");
    });

    it ("should transform a mixed sentence with punctuation", () => {
        expect(pigIt("! Hello there")).toBe("! elloHay heretay");
    });
});