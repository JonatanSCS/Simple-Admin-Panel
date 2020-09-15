import React, { useState } from 'react'
import './styles.css'
import Select from '../../components/Select'
import SortTable from '../../components/SortTable'

function Payments () {
  const [sort, setSort] = useState('date')
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
    value: 'custumer',
    label: 'Custumer'
  }, {
    value: 'amount',
    label: 'Amount'
  }]

  return (
    <div className="Payments ViewContainer">
      <div className="PaymentsSort">
        <Select items={sortBy} value={sort} onChange={setSort} />
      </div>
      <SortTable sorters={sortBy} active={sort} onChange={setSort} />
    </div>
  )
}

export default Payments
