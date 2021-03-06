import CLI from '../src/cli.js'

// expect https://jestjs.io/docs/en/expect
// mock https://jestjs.io/docs/en/mock-functions#using-a-mock-function
// mock+expect https://jestjs.io/docs/en/expect#tohavebeencalled

test('CLI constructor should save game object', () => {
  const game = jest.fn();
  const cli = new CLI(game);
  expect(cli.game).toBe(game);
});

test('CLI.parseLine on default should show board', () => {
  const game = jest.fn();
  game.draw = jest.fn(() => '<board>');
  const cli = new CLI(game);
  cli.log = jest.fn();

  cli.parseLine(' foobar ');

  expect(game.draw).toHaveBeenCalledWith(); // empty arguments
  expect(cli.log).toBeCalledTimes(2);
  expect(cli.log).toHaveBeenNthCalledWith(1, "<board>");
  expect(cli.log).toHaveBeenNthCalledWith(2, "Your input was 'foobar'");
})
