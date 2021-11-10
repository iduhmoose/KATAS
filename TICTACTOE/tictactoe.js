function tictactoe() {
    let round = "Game Board Creation...\n";
    let grid = " | | \n-+-+-\n | | \n-+-+-\n | | \n";
    let gameStatus = "\nBoard Created.\nThe game will start with player X";
    let printedGame = round + grid + gameStatus;
    let steps = [];

    let gridMapping = {
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

    steps.push(printedGame);

    // Game board creation
    console.log(steps[0]);

    playerNum = 0;
    player = ["X", "O"];
    round = ["Player X:\n", "Player O:\n"];
    gameStatus = "";

    // Loop for 2 game rounds
    for (let i = 0; i < 2; i++) {
        //Game begins
        let move = randomIndex();
        // Rechoose index if it has already been marked
        while (typeof gridMapping[move] == "string") {
            move = randomIndex();
        }
        //console.log(move);

        // Edit the grid for printing
        grid = replaceAt(grid, gridMapping[move], player[playerNum % 2]);
        printedGame = round[playerNum % 2] + grid + gameStatus;
        steps.push(printedGame);
        setTimeout(function() {
            console.log(printedGame);
        }, 2000);
        
        // Set the selected position
        gridMapping[move] = player[playerNum % 2];
        playerNum++;
    }
    
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