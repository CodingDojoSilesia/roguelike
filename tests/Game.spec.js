import Game from '../src/Game';

// expect function https://jestjs.io/docs/en/expect

test('Game constructor should fill the whole board with floor tiles', () => {
  const game = new Game();
  const board = game.board;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      expect(board[y][x]).toBe('.');
    }
  }
});

test('Game.draw() should be returns string', () => {
  const game = new Game();
  const output = game.draw();
  expect(typeof output).toBe('string');
});
