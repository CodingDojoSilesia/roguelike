'use strict';

const assert = require('chai').assert;

const Board = require('./../src/Board');

describe('Board', function() {
  describe('#init()', function() {
    it('should fill the whole board with floor tiles', function() {
      Board.init();
      const initialisedBoard = Board.board;
      for (let i = 0; i < initialisedBoard.length; i++) {
        for (let j = 0; j < initialisedBoard[i].length; j++) {
          assert.equal(initialisedBoard[i][j], '.');
        }
      }
    });
  });
});