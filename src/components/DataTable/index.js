import React from 'react'
import './styles.css'

function DataTable ({ headers, items }) {
  const renderItem = (item) => {
    return headers.map(({ id }) => <td key={`${id}-${item.label}`}>{item[id]}</td>)
  }
  return (
    <div className="DataTable">
      <table>
        <thead>
          <tr>
            {headers.map(({ id, label }) => <th key={id}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => <tr key={`row-${item.label}-${index}`}>{renderItem(item)}</tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
