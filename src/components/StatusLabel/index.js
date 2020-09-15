import React from 'react'
import './styles.css'

function StatusLabel ({status}) {
  const labels = {
    declined: 'Declined',
    refunded: 'Total Refund',
    no_charge: 'No Charges',
    partially_refunded: 'Partially Refund',
    paid: 'Paid'
  }

  return (
    <div className={`StatusLabel Status-${status}`}>
      <p>{labels[status]}</p>
    </div>
  )
}

export default StatusLabel
