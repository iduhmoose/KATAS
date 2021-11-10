function tictactoe() {
    let gameboard = "Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X";
    let steps = [];
    let game = [[],[],[]];

    steps.push(gameboard);

    // Game board creation
    console.log(steps[0]);

    //Game begins
    // let move = makeRandomMove();
    let firstXStep = "Game Board Creation...\nX| | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X";
    steps.push(firstXStep);
    return steps;
}

// function makeRandomMove() {
//     return Math.floor(Math.random() * 9);
// }

module.exports = tictactoe;