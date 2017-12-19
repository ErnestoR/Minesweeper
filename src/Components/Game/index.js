import Client from 'boardgame.io/client';
import Game from 'boardgame.io/game';

import MineBoard from '../Board';

const boardsize = 9;
const mines = 10;
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
const insertMines = (minefield, size) => {
  const copy = [...minefield];
  let i = 0;

  do {
    const id = Math.floor(Math.random() * 100);
    const mine = copy[id];
    const { isBorder, hasBomb } = mine;

    if (!isBorder && !hasBomb) {
      copy[id] = {
        ...mine,
        hasBomb: true,
      };

      i += 1;
    }
  } while (i <= size);

  return copy;
};

const emptyMineField = generateMinefield(boardsize);
const cells = insertMines(emptyMineField, boardsize);

const MineSweeper = Game({
  G: {
    size: boardsize + 2,
    cells,
    mines,
  },

  moves: {
    revealMine(G, ctx, id) {
      const cellsCopy = [...G.cells];

      cellsCopy[id] = {
        ...cellsCopy[id],
        isRevealed: true,
      };

      return {
        ...G,
        cells: [...cellsCopy],
      };
    },
  },
});
const MineSweeperGame = Client({
  game: MineSweeper,
  board: MineBoard,
  numPlayers: 1,
});

export default MineSweeperGame;
