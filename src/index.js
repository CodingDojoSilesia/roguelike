'use strict';

const readline = require('readline');
const Board = require('./Board');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

let Pawn = class {
    constructor(board, hp, symbol) {
        this.hp = hp;
        this.board = board;
        this.location = this.board.addPawn(this);
        this.symbol = symbol;
    }

    up() {
        this.location = this.board.up(this.location);
    }
    down() {
        this.location = this.board.down(this.location);
    }
    left() {
        this.location = this.board.left(this.location);
    }
    right() {
        this.location = this.board.right(this.location);
    }
    move() {
        const moves = ["up", "down", "left", "right"];
        let randomMove = moves[Math.floor(Math.random()*moves.length)];
        this[randomMove]();
    }
};

let Player = class extends Pawn {
    constructor(board) {
        super(board, 10, "P");
    }
    move() {
        rl.prompt();
    }
};

let Snake = class extends Pawn {
    constructor(board) {
        super(board, 2, "S");
    }
};

let Dragon = class extends Pawn {
    constructor(board) {
        super(board, 25, "D");
    }
};

const player = new Player(Board);
const dragon = new Dragon(Board);
const snake = new Snake(Board);

rl.on('line', (line) => {
    switch (line.trim()) {
        case "up":
            player.up();
            Board.write();
            break;
        case "down":
            player.down();
            Board.write();
            break;
        case "left":
            player.left();
            Board.write();
            break;
        case "right":
            player.right();
            Board.write();
            break;
        default:
            Board.write();
            console.log(`Your input was '${line.trim()}'`);
            break;
    }
    Board.movePawns();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});

Board.init();
Board.write();
