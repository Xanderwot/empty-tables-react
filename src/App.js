import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {
  render() {
    const headings = [
      'Product name',
      'Price'
    ];

    const rows = [];

    return (
      <div className="row justify-content-md-center">
        <div className="App col-9">
          <Table headings={headings} rows={rows} />
        </div>
      </div>
    );
  }
}

export default App;
