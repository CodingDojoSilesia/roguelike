import Game from '../src/Game';

test('Game constructor should fill the whole board with floor tiles', function() {
  const game = new Game();
  const board = game.board;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      expect(board[y][x]).toBe('.');
    }
  }
});
