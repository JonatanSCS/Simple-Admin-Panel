import React, { useState } from 'react'
import Select from '../../components/Select'

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
    <div className="Payments">
      <Select items={sortBy} value={sort} onChange={setSort}/>
    </div>
  )
}

export default Payments
