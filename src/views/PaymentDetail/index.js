import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getPaymentById, sortByField } from 'services'
import DataTabs from 'components/DataTabs'
import PaymentStatus from 'components/PaymentStatus'
import ClientCard from 'components/ClientCard'
import PaymentMethod from 'components/PaymentMethod'
import SortTable from 'components/SortTable'
import DataTable from 'components/DataTable'
import { sorters, tabs, headers } from './utils'

import './styles.css'

export function PaymentNavigation ({ payments }) {
  const [active, setActive] = useState('payment_attempt')
  const [sort, setSort] = useState('created')
  const [items, setItems] = useState(sortByField(payments, sort))
  useEffect(() => {
    setItems(sortByField(items, sort))
  }, [])

  const renderView = () => {
    switch (active) {
      case 'payment_attempt':
        return (
          <SortTable
            sorters={sorters}
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
    <div className="DataCard container-shadow PaymentNavigation" data-testid="PaymentNavigation">
      <DataTabs tabs={tabs} active={active} handleTab={setActive} />
      {renderView(active)}
    </div>
  )
}

function renderView (active, payment) {
  const items = payment.line_items
  const fee = payment.nested_charges[0].fee
  const payMethod = payment.nested_charges[0].payment_method
  const total = () => items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0)

  return active === 'data' ? (
    <div className="View container-justify-between">
      <div className="status-container">
        <PaymentStatus {...payment} />
      </div>
      <div className="client-container">
        <ClientCard {...payment.customer} />
      </div>
      <div className="method-container">
        <PaymentMethod {...payMethod}/>
      </div>
      <div className="nav-container">
        <PaymentNavigation payments={[...payment.nested_charges]}/>
      </div>
    </div>
  ) : (
    <div className="View container-shadow container-justify-between">
      <DataTable headers={headers} items={items} />
      <div className="BreakdownData">
        <p>Subtotal <span>$ {total()}</span></p>
        <p>Fee <span>$ {fee}</span></p>
        <p>Total <span>$ {total() + fee}</span></p>
      </div>
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
        { payment.id ? renderView(active, payment) : null}
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
