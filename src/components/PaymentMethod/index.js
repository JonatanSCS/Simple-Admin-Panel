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
    <div className="DataCard PaymentMethod" data-testid="PaymentMethodContainer">
      <h2>Payment Method</h2>
      <div className="PaymentBank">
        <p>{bank}</p>
        <div className="PaymentBrand">
          <img src={images[brand]} alt={bank} />
          <p>{type}</p>
        </div>
      </div>
      <div className="PaymentCard">
        <div className="PaymentCardData">
          <p>... ... ... <span>{last4}</span></p>
          <p>{name}</p>
        </div>
        <div className="PaymentMetadata">
          <p>Expiration Date: <span>{exp_month} / {exp_year}</span></p>
          <p>Authorization Code: <span>{auth_code}</span></p>
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
