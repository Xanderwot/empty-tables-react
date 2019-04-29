import React, { Component } from 'react';

class TableCell extends Component {
  render() {
    const cell = this.props.cell;

    return(
      <td>
        {cell}
      </td>
    )
  }
}

export default TableCell;
