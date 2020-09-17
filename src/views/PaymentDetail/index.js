import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getPaymentById, sortByField } from 'services'
import DataTabs from 'components/DataTabs'
import PaymentStatus from 'components/PaymentStatus'
import ClientCard from 'components/ClientCard'
import PaymentMethod from 'components/PaymentMethod'
import SortTable from 'components/SortTable'

import './styles.css'

export function PaymentNavigation ({ payments }) {
  const [active, setActive] = useState('payment_attempt')
  const [sort, setSort] = useState('created')
  const [items, setItems] = useState(sortByField(payments, sort))
  const sortBy = [{
    value: 'created',
    label: 'Date'
  }, {
    value: 'status',
    label: 'Status'
  }, {
    value: 'payment_method',
    label: 'Payment Method'
  }, {
    value: 'amount',
    label: 'Amount'
  }]

  const tabs = [
    { id: 'payment_attempt', label: 'Payments Attempts' },
    { id: 'refounds', label: 'Refounds' },
    { id: 'notifications', label: 'Notifications' }
  ]

  useEffect(() => {
    setItems(sortByField(items, sort))
  }, [])

  const renderView = () => {
    switch (active) {
      case 'payment_attempt':
        return (
          <SortTable
            sorters={sortBy}
            active={sort}
            onChange={setSort}
            items={payments}
          />
        )
      case 'refounds':
        return <h3>No Refounds</h3>
      case 'notifications':
        return <h3>No Notifications</h3>
    }
  }

  return (
    <div className="DataCard PaymentNavigation" data-testid="PaymentNavigation">
      <DataTabs tabs={tabs} active={active} handleTab={setActive} />
      {renderView(active)}
    </div>
  )
}

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
    <div className="PaymentDetail ViewContainer" data-testid="PaymentDetailContainer">
      <h1>Payment detail</h1>
      <div className="Container">
        <DataTabs tabs={tabs} active={active} handleTab={setActive} />
        { payment.id ? (
          <div className="View">
            <div className="PaymentContainer PaymentStatusContainer">
              <PaymentStatus {...payment} />
            </div>
            <div className="PaymentContainer ClientCardContainer">
              <ClientCard {...payment.customer} />
            </div>
            <div className="PaymentContainer PaymentMethodContainer">
              <PaymentMethod {...payment.nested_charges[0].payment_method}/>
            </div>
            <div className="PaymentContainer PaymentNavigationContainer">
              <PaymentNavigation payments={payment.nested_charges}/>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

PaymentDetail.propTypes = {
  match: PropTypes.object
}

PaymentNavigation.propTypes = {
  payments: PropTypes.array
}

export const PaymentDetailTest = PaymentDetail
export default withRouter(PaymentDetail)
