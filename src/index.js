'use strict';

const readline = require('readline');
const Board = require('./Board');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});


let Player = class {
    constructor(board, hp = 20) {
        this.hp = hp;
        this.board = board;
        this.location = this.board.addPawn(this);
        this.symbol = "P";
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

};

const player = new Player(Board);

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
            // TODO: hero actions go here
            // player will keep his position
            // when moved he will ask board for his new position
            // board will keep monster positions, or references to objects and ask
            // them for their positions, as player keeps it's own so should monsters
            // BOARD keeps a list of objects, dimensions and is only to
            // return/calculate new position
            // if there is monster in hero's way action should be attack instead of move
        default:
            Board.write();
            console.log(`Your input was '${line.trim()}'`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});

Board.init();
// add monsters
Board.write();
rl.prompt();
