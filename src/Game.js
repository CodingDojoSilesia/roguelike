const floor = '.';

const BOARD_WIDTH = 28;
const BOARD_HEIGHT = 14;

export default class Game {

  constructor() {
    this.board = [];

    for (let y = 0; y < BOARD_HEIGHT; y++) {
      const row = new Array(BOARD_WIDTH);
      for (let x = 0; x < BOARD_WIDTH; x++) {
        row[x] = floor;
      }
      this.board[y] = row;
    }
  }

  draw() {
    return this.board
      .map((row) => row.join(''))  // transform each row to one line
      .join('\n')  // join lines with new lines
    ;
  }
}

