import React from 'react';

import './styles.css';

const MineCell = ({ id, hasBomb, isBorder, isRevealed }) => (
  <div className={`mine ${isBorder ? 'border' : ''}`}>{hasBomb ? 'X' : ''}</div>
);

export default MineCell;
