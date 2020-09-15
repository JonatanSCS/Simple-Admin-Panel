import React from 'react'
import PropTypes from 'prop-types'
import StatusLabel from '../StatusLabel'

function DataRow ({ data, fields }) {
  const renderDataComponent = (field) => {
    const components = {
      status: <StatusLabel status={data.status} />
    }

    return components[field] || null
  }

  return (
    <tr>
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
