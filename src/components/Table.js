import React, { Component } from 'react';
import TableRow from './TableRow';
import EmptyTable from './EmptyTable';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: this.props.rows };

    this.addRow = this.addRow.bind(this);
  }

  addRow () {
    this.setState({rows: [['Some product', 100]]});
  }

  render() {
    const {headings} = this.props;

    return (
      <div>
        <table className='table'>
          <thead>
            <TableRow cells={headings} />
          </thead>
          <tbody>
            {this.state.rows.map(function(row, index) {
              return(
                <TableRow key={"row-" + index} cells={row} rowIndex={index} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const emptyStateable = (WrappedTable) => {
  return class extends WrappedTable {
    render () {
      if (this.state.rows.length === 0) {
        return (
          <div>
            <EmptyTable {...this.props} />
            <button onClick={this.addRow}>Add row</button>
          </div>
        );
      }
      return (
        <WrappedTable {...this.props} rows={this.state.rows} />
      );
    }
  }
}

export default emptyStateable(Table);
