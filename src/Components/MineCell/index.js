import React from 'react';

import './styles.css';

const MineCell = ({ id, hasBomb, isBorder, isRevealed }) => (
  <div className={`mine ${isBorder ? 'border' : ''}`} />
);

export default MineCell;
