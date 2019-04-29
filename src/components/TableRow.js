import React, { Component } from 'react';
import TableCell from './TableCell';

class TableRow extends Component {
  render() {
    const {cells, rowIndex} = this.props;

    return(
      <tr>
        {cells.map(function(cell, index) {
          return(
            <TableCell key={"cell-" + rowIndex + index} cell={cell} />
          );
        })}
      </tr>
    );
  }
}

export default TableRow;
