import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getPaymentById } from '../../services'
import DataTabs from '../../components/DataTabs'
import PaymentStatus from '../../components/PaymentStatus'

import './styles.css'

function PaymentDetail ({ match }) {
  const paymentId = match.params.id
  const [active, setActive] = useState('data')
  const [payment, setPayment] = useState({})
  const tabs = [
    { id: 'data', label: 'Data' },
    { id: 'breakdown', label: 'Breakdown' }
  ]

  useEffect(() => {
    async function fetchData () {
      const payment = await getPaymentById(paymentId)
      setPayment(payment)
    }
    fetchData()
  }, [])

  return (
    <div className="PaymentDetail ViewContainer">
      <h1>Payment detail</h1>
      <div className="Container">
        <DataTabs tabs={tabs} active={active} handleTab={setActive} />
        <div className="View">
          <div>
            { payment.id ? <PaymentStatus {...payment} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

PaymentDetail.propTypes = {
  match: PropTypes.object
}

export default withRouter(PaymentDetail)
