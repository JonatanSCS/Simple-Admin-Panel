import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StatusLabel from '../StatusLabel'
import eyeImage from './assets/eye.svg'
import visaImage from './assets/visa.svg'
import masterImage from './assets/master.svg'
import americanImage from './assets/american.svg'

import './styles.css'

function DataType ({ type }) {
  const images = [visaImage, masterImage, americanImage]
  const random = Math.floor(Math.random() * 3) + 0
  const [image] = useState(images[random])
  return (
    <div className="DataTypeContainer">
      <p>{type}</p>
      {type ? <img src={image} alt="Credit card" /> : null}
    </div>
  )
}

function DataRow ({ data, fields }) {
  const renderDataComponent = (field) => {
    const components = {
      status: <StatusLabel status={data.status} />,
      amount: <p>{`$ ${data.amount}`}</p>,
      customer: <div className="DataContainer"><p>{data.customer.name}</p><p>{data.customer.email}</p></div>,
      date: <div className="DataContainer"><p>{data.date}</p><p>{data.hour}</p></div>,
      type: <DataType type={data.type} />
    }

    return components[field] || <p>{data[field]}</p>
  }

  return (
    <tr className="DataRow" height="70px">
      <td>
        <img src={eyeImage} alt="payment detail" className="DetailImage" />
      </td>
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
