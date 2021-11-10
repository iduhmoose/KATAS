function tictactoe() {
    let gameboard = "Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X";
    let steps = [];
    let game = [[],[],[]];

    steps.push(gameboard);

    // Game board creation
    console.log(steps[0]);

    return steps;
}

module.exports = tictactoe;