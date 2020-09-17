import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { mount } from 'enzyme'
import DataRow from './index'

const mock = {
  id: 'ord_2m7p69rKpJcZB9VYD',
  created: 1565309157,
  status: 'paid',
  amount: 51000,
  currency: 'MXN',
  brand: 'visa',
  balance: 51000,
  type: 'Credit',
  failure: null,
  customer: {
    name: 'Lews Therin',
    email: 'lews.therin@gmail.co'
  }
}

const fields = ['created', 'date', 'type']

test('Render Row correctly', () => {
  const wrapper = mount(
    <Router>
      <table>
        <thead>
          <DataRow data={mock} fields={fields} path="/payments" />
        </thead>
      </table>
    </Router>
  )
  expect(wrapper.find('[data-testid="DataRowContainer"]'))
})
