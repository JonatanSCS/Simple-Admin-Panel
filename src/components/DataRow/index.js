import React from 'react'
import PropTypes from 'prop-types'

import { NavLink, withRouter } from 'react-router-dom'

import StatusLabel from '../StatusLabel'
import eyeImage from './assets/eye.svg'
import visaImage from './assets/visa.svg'
import americanImage from './assets/american.svg'

import './styles.css'

function DataType ({ type, brand }) {
  const images = {
    visa: visaImage,
    american_express: americanImage
  }
  return (
    <div className="DataTypeContainer">
      <p>{type}</p>
      {type ? <img src={images[brand]} alt="Credit card" /> : null}
    </div>
  )
}

function DataCreated ({ created }) {
  const d = new Date(created)
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec']
  const day = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  const hour = `${d.getHours()}:${d.getMinutes()}`

  return (
    <div className="DataContainer">
      <p>{day}</p><p>{hour}</p>
    </div>
  )
}

function DataRow ({ data, fields, path }) {
  const renderDataComponent = (field) => {
    const components = {
      status: <StatusLabel status={data.status} />,
      amount: <p>{`$ ${data.amount}`}</p>,
      customer: <div className="DataContainer"><p>{data.customer.name}</p><p>{data.customer.email}</p></div>,
      created: <DataCreated created={data.created} />,
      type: <DataType type={data.type} brand={data.brand} />
    }

    return components[field] || <p>{data[field]}</p>
  }

  return (
    <tr className="DataRow" height="70px">
      <td>
        <NavLink to={`${path}/${data.id}`}>
          <img src={eyeImage} alt="payment detail" className="DetailImage" />
        </NavLink>
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
  fields: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired
}

DataType.propTypes = {
  type: PropTypes.string,
  brand: PropTypes.string
}

DataCreated.propTypes = {
  created: PropTypes.number
}

export default DataRow
