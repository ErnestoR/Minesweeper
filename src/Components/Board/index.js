import React, { Component } from 'react';

import MineCell from '../MineCell';
import './styles.css';

class Board extends Component {
  constructor(){
    super();

    this.onCellClick = this.onCellClick.bind(this);
  }
  onCellClick(cid) {
    this.props.moves.revealMine(cid);
    this.props.endTurn();
  }

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
          {cells.map(cell => (
            <MineCell
              {...cell}
              key={cell.id}
              onCellClick={this.onCellClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
