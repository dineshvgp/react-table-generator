import React, {Component} from 'react';
import './ReactTable.css';

class ReactTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rowsCount: props.rowsCount,
      columnsCount: props.columnsCount
    }
  }

  generateColumns () {
    let columns = [];
    for(let count=0; count<this.state.rowsCount; count++) {
      columns.push(
        <td>
        </td>
      )
    }
    return columns;
  }

  generateRows () {
    let rows = [];
    for(let count=0; count<this.state.rowsCount; count++) {
      rows.push(
        <tr>
          {this.generateColumns()}
        </tr>
      )
    }
    return rows;
  }

  render() {
    return (
      <table>
        <tbody>
          {this.generateRows()}
        </tbody>
      </table>
    )
  }
}

export default ReactTable;
