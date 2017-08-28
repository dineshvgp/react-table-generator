import React, { Component } from 'react';
import ReactTable from './ReactTable';
import './App.css';

const data = [
  ['Dropbox', 'paper', 'like'],
  ['table', '', '']
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Table Generator</h2>
        </div>
        <div className="App-preview">
          <ReactTable data={data} />
        </div>
      </div>
    );
  }
}

export default App;
