import React, {Component} from 'react';
import './ReactTable.css';
import {getDimension} from './utils';
import ContentEditable from 'react-contenteditable';

class ReactTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rowCount: 2,
      columnCount: 2,
      data: [
        ['', ''],
        ['', '']
      ]
    }
  }

  componentDidMount() {
    const { data } = this.props;
    if(data && data.constructor === Array) {
      this.setState({
        ...getDimension(data),
        data
      })
    }
  }

  updateData = (e, dimension) => {
    const {data} = this.state;
    this.setState({
      data: [
        ...data.slice(0, dimension.row),
        [
          ...data[dimension.row].slice(0, dimension.column),
          e.target.value,
          ...data[dimension.row].slice(dimension.column + 1)
        ],
        ...data.slice(dimension.row + 1),
      ]
    })
  }

  generateColumns (row) {
    let columns = [];
    for(let column = 0; column < this.state.columnCount; column++) {
      columns.push(
        <td key={row+''+column} >
          <ContentEditable
            className='content-editable'
            html={this.state.data[row][column] || ''}
            disabled={false}
            onChange={(e) => this.updateData(e, {row, column})}
          />
        </td>
      )
    }
    return columns;
  }

  generateRows () {
    let rows = [];
    for(let row = 0; row < this.state.rowCount; row++) {
      rows.push(
        <tr key={row}>
          {this.generateColumns(row)}
        </tr>
      )
    }
    return rows;
  }

  render() {
    return (
      <table id='mytab1'>
        <tbody>
          {this.generateRows()}
        </tbody>
      </table>
    )
  }
}

export default ReactTable;
