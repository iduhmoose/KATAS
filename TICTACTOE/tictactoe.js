function tictactoe() {
    let round = "Game Board Creation...\n";
    let grid = " | | \n-+-+-\n | | \n-+-+-\n | | \n";
    let gameStatus = "\nBoard Created.\nThe game will start with player X";
    let gameboard = round + grid + gameStatus;
    let steps = [];
    let game = [];

    const gridMapping = {
        0: 0,
        1: 2,
        2: 4,
        3: 12,
        4: 14,
        5: 16,
        6: 24,
        7: 26,
        8: 28
    };

    steps.push(gameboard);

    // Game board creation
    console.log(steps[0]);

    round = ["Player X:\n", "Player O:\n"];
    gameStatus = "";

    //Game begins
    let move = randomIndex();
    game[move] = 'X';

    grid = replaceAt(grid, gridMapping[move], "X");
    gameboard = round[0] + grid + gameStatus;
    steps.push(gameboard);

    console.log(steps[1]);
    return steps;
}

function randomIndex() {
    return Math.floor(Math.random() * 9);
}

function replaceAt(str, idx, char) {
    if (idx > str.length - 1 || idx < 0) return str;
    return str.substring(0,idx) + char + str.substring(idx+1);
}

module.exports = tictactoe;