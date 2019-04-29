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
        <table className='table table-dark'>
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
          <div className='empty-content'>
            <EmptyTable onClick={this.addRow} {...this.props} />
            <a href='#' onClick={this.addRow}>Click to add some content</a>
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
