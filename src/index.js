import Game from './Game';
import CLI from './cli';

const game = new Game();
const cli = new CLI(game);
cli.run();
