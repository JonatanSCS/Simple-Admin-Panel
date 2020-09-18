import React from 'react'
import './styles.css'

function DataTable ({ headers, items }) {
  const renderItem = (item) => {
    return headers.map(({ id }) => <td key={`${id}-${item.label}`}>{item[id]}</td>)
  }
  return (
    <div className="DataTable" data-testid="DataTableContainer">
      <table>
        <thead>
          <tr>
            {headers.map(({ id, label }) => <th key={id} data-testid="DataTableHead">{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => <tr key={`row-${item.label}-${index}`} data-testid="DataTableItem">{renderItem(item)}</tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
