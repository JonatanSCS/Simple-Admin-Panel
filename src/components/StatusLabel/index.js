import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function StatusLabel ({ status }) {
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

StatusLabel.propTypes = {
  status: PropTypes.string.isRequired
}

export default StatusLabel
