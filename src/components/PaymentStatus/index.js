import React from 'react'
import StatusLabel from '../StatusLabel'
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
    <div className="DataCard" data-testid="PaymentStatusCard">
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

export default PaymentStatus
