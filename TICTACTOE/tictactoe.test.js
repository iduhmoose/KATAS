const tictactoe = require("./tictactoe");

describe("Game board creation", () => {

    it("should create the game board with the correct statements", () => {
        expect(tictactoe()).toBe('Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X');
    });
});