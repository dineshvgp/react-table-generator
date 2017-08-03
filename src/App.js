import React, { Component } from 'react';
import ReactTable from './ReactTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Table Generator</h2>
        </div>
        <div className="App-preview">
          <ReactTable rowsCount={2} columnsCount={2} />
        </div>
      </div>
    );
  }
}

export default App;
