'use strict';

const floor = '.';

const boardWidth = 28;
const boardHeight = 14;

let board = [];
let pawns = [];

function init() {
    for (let i = 0; i < boardHeight; i++) {
        board[i] = [];
        for (let j = 0; j < boardWidth; j++) {
            board[i][j] = floor;
        }
    }
}

function write() {
    // place pawns
    pawns.forEach((pawn) => {
        let [i, j] = pawn.location;
        board[i][j] = pawn.symbol;
    });

    for (let i = 0; i < boardHeight; i++) {
        console.log(board[i].join(''));
    }
}

let randomLocation = function fetchRandomLocation() {
    let location = [
        Math.floor(Math.random() * boardWidth),
        Math.floor(Math.random() * boardHeight)
    ];
    pawns.forEach((pawn) => {
        if (pawn.location == location) {
            return randomLocation();
        }
    });

    return location;
};

let addPawn = function addPawnWithRandomPosition(pawn) {
    const location = randomLocation();
    pawns.push(pawn);
    return location;
};

let up = function movePawnUp(currentLocation) {
    console.log(currentLocation)

}

module.exports = {
    board: board,
    init: init,
    write: write,
    addPawn: addPawn,
    up: up
};
