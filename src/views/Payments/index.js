import React, { useEffect, useState } from 'react'

import { getPaymentsRecords } from '../../services'

import './styles.css'
import Select from '../../components/Select'
import SortTable from '../../components/SortTable'

function Payments () {
  const [sort, setSort] = useState('date')
  const [payments, setPayments] = useState([])
  const sortBy = [{
    value: 'date',
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
    async function fetchData () {
      const { data } = await getPaymentsRecords()
      setPayments(data.payments)
    }

    fetchData()
  }, [])

  return (
    <div className="Payments ViewContainer">
      <div className="PaymentsSort">
        <Select items={sortBy} value={sort} onChange={setSort} />
      </div>
      <SortTable
        sorters={sortBy}
        active={sort}
        onChange={setSort}
        items={payments}
      />
    </div>
  )
}

export default Payments
