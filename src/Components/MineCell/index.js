import React from 'react';

import './styles.css';

const MineCell = ({ id, hasBomb, isBorder, isRevealed, onCellClick }) => (
  <div
    className={`mine ${isBorder ? 'border' : ''}`}
    onClick={() => onCellClick(id)}
    data-cid={id}
  >
    {isRevealed ? (hasBomb ? 'X' : '') : 'O'}
  </div>
);

export default MineCell;
