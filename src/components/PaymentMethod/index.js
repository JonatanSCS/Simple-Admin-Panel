import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import visaImage from 'assets/brands/visa.svg'
import americanImage from 'assets/brands/american.svg'

function PaymentMethod ({
  bank,
  last4,
  brand,
  name,
  exp_month,
  exp_year,
  auth_code,
  type
}) {
  const images = {
    visa: visaImage,
    american_express: americanImage
  }

  return (
    <div className="DataCard container-shadow PaymentMethod" data-testid="PaymentMethodContainer">
      <h2>Payment Method</h2>
      <div className="PaymentBank container-justify-between container-align-center">
        <p className="text-size-small">{bank}</p>
        <div className="PaymentBrand container-align-center">
          <img src={images[brand]} alt={bank} />
          <p className="text-size-small">{type}</p>
        </div>
      </div>
      <div className="PaymentCard container-text-center ">
        <div className="PaymentCardData">
          <p>... ... ... <span>{last4}</span></p>
          <p>{name}</p>
        </div>
        <div className="PaymentMetadata">
          <p className="text-size-small">Expiration Date: <span>{exp_month} / {exp_year}</span></p>
          <p className="text-size-small">Authorization Code: <span>{auth_code}</span></p>
        </div>
      </div>
    </div>
  )
}

PaymentMethod.propTypes = {
  bank: PropTypes.string,
  last4: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  exp_month: PropTypes.string,
  exp_year: PropTypes.string,
  auth_code: PropTypes.string,
  type: PropTypes.string
}

export default PaymentMethod
