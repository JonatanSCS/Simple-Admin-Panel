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
    <div className="DataCard PaymentStatus" data-testid="PaymentStatusCard">
      <h2>Payment Status</h2>
      <div className="Container">
        <div className="Row">
          <div>
            <p className="Ammount"><span>Ammount</span> ${amount}</p>
          </div>
          <div>
            <p className="Created">Created at {calculateDate(created)}<span>Pay at: Not yet paid</span></p>
          </div>
        </div>
        <div className="Row">
          <StatusLabel status={status} />
          { message ? <p className="StatusMessage" data-testid="StatusMaessage">{message}</p> : null }
        </div>
        <div className="Row">
          <div>
            <p className="Order"><span>Order ID: </span> {id}</p>
          </div>
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
