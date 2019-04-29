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
      <div className="App">
        <Table headings={headings} rows={rows} />
      </div>
    );
  }
}

export default App;
