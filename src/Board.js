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
    // clear board
    init();
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
        Math.floor(Math.random() * boardHeight),
        Math.floor(Math.random() * boardWidth)
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

// TODO: add decorator for redrawing board after move

let up = function newLocationUp([i, j]) {
    const newUp = i - 1 <= 0 ? 0 : i - 1;
    return [newUp, j];
};

let down = function newLocationDown([i, j]) {
    const newDown = i + 1 >= boardHeight ? boardHeight - 1 : i + 1;
    return [newDown, j];
};

let left = function newLocationLeft([i, j]) {
    const newLeft = j - 1 <= 0 ? 0 : j - 1;
    return [i, newLeft];
};

let right = function newLocationRight([i, j]) {
    const newRight = j + 1 >= boardWidth - 1 ? boardWidth : j + 1;
    return [i, newRight];
};

let movePawns = function moveAllPawns() {
    pawns.forEach((p) => {
        p.move();
    });
};

module.exports = {
    board: board,
    init: init,
    write: write,
    addPawn: addPawn,
    up: up,
    down: down,
    left: left,
    right: right,
    movePawns: movePawns
};
