import Client from 'boardgame.io/client';
import Game from 'boardgame.io/game';

import MineBoard from '../Board';

const boardsize = 4;
const mines = 8;
const generateMinefield = size => {
  const sizeWithBorder = (size + 2) ** 2;
  const emptyCells = Array(sizeWithBorder).fill({
    id: null,
    hasBomb: false,
    isBorder: false,
    isRevealed: false,
  });

  return emptyCells.map((cell, i) => {
    const isBorder =
      i < size + 2 ||
      i >= sizeWithBorder - (size + 2) ||
      i % (size + 2) === 0 ||
      (i + 1) % (size + 2) === 0;

    return {
      ...cell,
      id: i,
      isBorder,
    };
  });
};
const cells = generateMinefield(boardsize);

const MineSweeper = Game({
  G: {
    size: boardsize + 2,
    cells,
    mines,
  },

  moves: {
    revealMine(G, ctx, id) {},
  },
});

const MineSweeperGame = Client({ game: MineSweeper, board: MineBoard });

export default MineSweeperGame;
