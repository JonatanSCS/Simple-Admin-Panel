import React from 'react'
import PropTypes from 'prop-types'
import StatusLabel from '../StatusLabel'
import './styles.css'

function DataRow ({ data, fields }) {
  const renderDataComponent = (field) => {
    const components = {
      status: <StatusLabel status={data.status} />,
      amount: <p>{`$ ${data.amount}`}</p>,
      customer: <div><p>{data.customer.name}</p><p>{data.customer.email}</p></div>,
      date: <div><p>{data.date}</p><p>{data.hour}</p></div>
    }

    return components[field] || <p>{data[field]}</p>
  }

  return (
    <tr className="DataRow" height="70px">
      {fields.map((field) =>
        <td key={field}>
          {renderDataComponent(field)}
        </td>)
      }
    </tr>
  )
}

DataRow.propTypes = {
  data: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired
}

export default DataRow
