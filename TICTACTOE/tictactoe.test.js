const tictactoe = require("./tictactoe");

describe("Game board creation", () => {
    it("should create the game board with the correct statements", () => {
        let firstStep = tictactoe()[0];
        expect(firstStep).toBe('Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X');
    });
});

describe("Game begins", () => {
    it("should start with player X", () => {
        let playerXFirstStep = tictactoe()[1];
        expect(playerXFirstStep).toContain('X');
        expect(playerXFirstStep).not.toContain('O');
    });
});