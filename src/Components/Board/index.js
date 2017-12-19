import React, { Component } from 'react';

import MineCell from '../MineCell';
import './styles.css';

class Board extends Component {
  render() {
    const { cells, size } = this.props.G;

    const styles = {
      grid: {
        gridTemplateColumns: '1fr '.repeat(size),
        gridTemplateRows: '1fr '.repeat(size),
      },
    };

    return (
      <div className="main">
        <div className="gridBoard" style={styles.grid}>
          {cells.map(cell => <MineCell {...cell} key={cell.id} />)}
        </div>
      </div>
    );
  }
}

export default Board;
