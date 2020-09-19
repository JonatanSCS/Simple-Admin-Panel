import React from 'react'
import PropTypes from 'prop-types'

import StatusLabel from 'components/StatusLabel'
import { calculateDate } from '../../utils'

import './styles.css'

function PaymentStatus ({
  id,
  status,
  amount,
  nested_charges,
  created
}) {
  const message = nested_charges[0]?.failure_message

  return (
    <div className="DataCard container-shadow PaymentStatus" data-testid="PaymentStatusCard">
      <h2>Payment Status</h2>
      <div className="Container">
        <div className="Row container-justify-between container-align-center">
          <div>
            <p className="Ammount">
              <span className="text-label">Ammount: </span>
              $ {amount}
            </p>
          </div>
          <div>
            <p>
              <span className="text-label">Pay at: Not yet paid</span>
              Created at {calculateDate(created)}
            </p>
          </div>
        </div>
        <div className="Row container-justify-between container-align-center">
          <StatusLabel status={status} />
          { message ? (
            <p
              className="StatusMessage text-size-small"
              data-testid="StatusMaessage"
            >
              {message}
            </p>
          ) : null }
        </div>
        <div className="Row container-justify-between container-align-center">
          <p className="Order"><span>Order ID: </span> {id}</p>
        </div>
      </div>
    </div>
  )
}

PaymentStatus.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  amount: PropTypes.number,
  nested_charges: PropTypes.array,
  created: PropTypes.number
}

export default PaymentStatus
