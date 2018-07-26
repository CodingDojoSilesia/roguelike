'use strict';

const readline = require('readline');
const Board = require('./Board');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.on('line', (line) => {
  switch (line.trim()) {
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
Board.write();
rl.prompt();
