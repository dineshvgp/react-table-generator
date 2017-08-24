
function getColumnCount(data) {
  let columnLength = 0;
  data.forEach(function(row) {
    if(columnLength < row.length) {
      columnLength = row.length
    }
  });
  return columnLength;
}

function getRowCount(data) {
  return data.length
}

function getDimension(data) {
  return {
    rowCount: getRowCount(data),
    columnCount: getColumnCount(data)
  }
}

export {
  getDimension
}
