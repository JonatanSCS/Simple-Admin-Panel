import React from 'react'
import { shallow } from 'enzyme'
import SortTable from './index'
import payments from 'mocks/payments'

const items = [{
  value: 'date',
  label: 'Date'
}, {
  value: 'status',
  label: 'Payment Status'
}, {
  value: 'type',
  label: 'Payment Type'
}]

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  })
}))

const onChange = jest.fn()
const wrapper = shallow(
  <SortTable
    sorters={items}
    active="status"
    onChange={onChange}
    items={payments.data.payments}
  />
)

test('Sort Table is render successfully', () => {
  const headers = wrapper.find('[data-testid="SortTableHeader"]')
  expect(headers).toHaveLength(items.length)
})

test('On header click change active sort', () => {
  const header = wrapper.find('[data-testid="SortTableHeader"]').first()
  expect(wrapper.find('.Active').text()).toEqual('Payment Status')
  header.simulate('click')
  expect(onChange).toHaveBeenCalled()
})
