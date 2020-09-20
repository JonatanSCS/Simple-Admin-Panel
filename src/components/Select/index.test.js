import React from 'react'
import { shallow } from 'enzyme'
import Select from './index'

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
const onChange = jest.fn()
const wrapper = shallow(<Select items={items} value="date" onChange={onChange}/>)
const select = wrapper.find('[data-testid="SelectMain"]')

test('Page render successfully', () => {
  const options = wrapper.find('[data-testid="SelectOption"]')
  expect(options).toHaveLength(items.length)
  expect(select.props().value).toEqual('date')
})

test('Select change call onChange handler', () => {
  select.simulate('change', { target: { value: 'type' } })
  expect(onChange).toHaveBeenCalled()
})
