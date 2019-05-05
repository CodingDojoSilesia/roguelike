import readline from 'readline';

export default class CLI {

  constructor(game) {
    this.game = game;
  }

  parseLine(line) {
    const trimedLine = line.trim();
    switch (trimedLine) {
      default:
        this.game.draw();
        this.log(`Your input was '${trimedLine}'`);
        break;
    }
  }

  // Below methods are neccesary to run prompt in console
  run() {
    this.initRL();
    this.game.draw();
    this.rl.prompt();
  }

  initRL() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    });

    this.rl
      .on('line', this.onLine.bind(this))
      .on('close', this.onClose.bind(this))
    ;
  }

  onLine(line) {
    this.parseLine(line);
    this.rl.prompt();
  }
  
  onClose() {
    this.log('Have a great day!');
    process.exit(0);
  }

  log(s) {
    console.log(s);
  }

}


