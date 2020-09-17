import React, { useEffect, useState } from 'react'

import { getPaymentsRecords } from '../../services'

import './styles.css'
import Select from '../../components/Select'
import SortTable from '../../components/SortTable'

function Payments () {
  const [sort, setSort] = useState('created')
  const [payments, setPayments] = useState([])
  const sortBy = [{
    value: 'created',
    label: 'Date'
  }, {
    value: 'status',
    label: 'Payment Status'
  }, {
    value: 'type',
    label: 'Payment Type'
  }, {
    value: 'customer',
    label: 'Customer'
  }, {
    value: 'amount',
    label: 'Amount'
  }]

  useEffect(() => {
    setPayments([])
    async function fetchData () {
      const payments = await getPaymentsRecords(sort)
      setPayments(payments)
    }

    fetchData()
  }, [sort])

  return (
    <div className="Payments ViewContainer">
      <h1>Payments</h1>
      <div className="PaymentsSort">
        <Select items={sortBy} value={sort} onChange={setSort} />
      </div>
      <SortTable
        sorters={sortBy}
        active={sort}
        onChange={setSort}
        items={payments}
        viewed
      />
    </div>
  )
}

export default Payments
