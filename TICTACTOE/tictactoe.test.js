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

    it("should allow player O to choose the next open position", () => {
        let playerOFirstStep = tictactoe()[2];
        expect((playerOFirstStep.match(/X/g) || []).length).toEqual(1);
        expect((playerOFirstStep.match(/O/g) || []).length).toEqual(2);
    });

    it("should return to player X to choose the next open position", () => {
        let playerXStep = tictactoe()[3];
        expect((playerXStep.match(/X/g) || []).length).toEqual(3);
        expect((playerXStep.match(/O/g) || []).length).toEqual(2);
    });
});