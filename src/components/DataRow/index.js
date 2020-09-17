import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { calculateDate } from '../../utils'

import StatusLabel from '../StatusLabel'
import eyeImage from './assets/eye.svg'
import visaImage from '../../assets/brands/visa.svg'
import americanImage from '../../assets/brands/american.svg'

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

function DataRow ({ data, fields, path, viewed = false }) {
  const renderDataComponent = (field) => {
    const components = {
      status: <StatusLabel status={data.status} />,
      amount: <p>{`$ ${data.amount}`}</p>,
      customer: <div className="DataContainer"><p>{data?.customer?.name}</p><p>{data?.customer?.email}</p></div>,
      created: <div className="DataContainer"><p>{calculateDate(data.created)}</p></div>,
      type: <DataType type={data.type} brand={data.brand} />,
      payment_method: <DataType type={data?.payment_method?.type} brand={data?.payment_method?.brand} />
    }

    return components[field] || <p>{data[field]}</p>
  }

  return (
    <tr className="DataRow" height="70px" data-testid="DataRowContainer">
      { viewed && (
        <td>
          <NavLink to={`${path}/${data.id}`}>
            <img src={eyeImage} alt="payment detail" className="DetailImage" />
          </NavLink>
        </td>
      )}
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
  path: PropTypes.string.isRequired,
  viewed: PropTypes.bool
}

DataType.propTypes = {
  type: PropTypes.string,
  brand: PropTypes.string
}

export default DataRow
