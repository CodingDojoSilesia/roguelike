'use strict';

const floor = '.';

const boardWidth = 28;
const boardHeight = 14;

let board = [];

function init() {
  for (let i = 0; i < boardHeight; i++) {
    board[i] = [];
    for (let j = 0; j < boardWidth; j++) {
      board[i][j] = floor;
    }
  }
}

function write() {
  for (let i = 0; i < boardHeight; i++) {
    console.log(board[i].join(''));
  }
}

module.exports = {
  board: board,
  init: init,
  write: write
};