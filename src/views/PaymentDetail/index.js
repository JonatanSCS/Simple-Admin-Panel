import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getPaymentById } from '../../services'
import DataTabs from '../../components/DataTabs'

import './styles.css'

function DataView () {
  return (
    <div>
      <h1>Data</h1>
    </div>
  )
}

function BreakdownView () {
  return <h1>Breakdown</h1>
}

function PaymentDetail ({ match }) {
  const paymentId = match.params.id
  const [active, setActive] = useState('data')
  const renderView = (view) => {
    const views = {
      data: DataView,
      breakdown: BreakdownView
    }
    const View = views[view]

    return <View />
  }
  const tabs = [
    { id: 'data', label: 'Data' },
    { id: 'breakdown', label: 'Breakdown' }
  ]

  useEffect(() => {
    async function fetchData () {
      const payment = await getPaymentById(paymentId)
      console.log(payment)
    }
    fetchData()
  }, [])

  return (
    <div className="PaymentDetail ViewContainer">
      <h1>Payment detail</h1>
      <div className="Container">
        <DataTabs tabs={tabs} active={active} handleTab={setActive} />
        {renderView(active)}
      </div>
    </div>
  )
}

PaymentDetail.propTypes = {
  match: PropTypes.object
}

export default withRouter(PaymentDetail)
