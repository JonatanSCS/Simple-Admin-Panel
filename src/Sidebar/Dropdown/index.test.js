import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './index'

const mockItems = [{
  id: 'generalOne',
  label: 'Item One'
}, {
  id: 'generalTwo',
  label: 'Item Two'
}]
const wrapper = shallow(<Dropdown id="general" label="General" items={mockItems} />)
test('Toggle items on header click', () => {
  let header = wrapper.find('[data-testid="DropdownHeader"]')

  expect(wrapper.find('.Visible').exists()).toEqual(false)
  expect(wrapper.find('.DropdownActive').exists()).toEqual(false)
  expect(wrapper.find('.Visible').exists()).toEqual(false)
  header.simulate('click')
  expect(wrapper.find('.Visible').exists())
  expect(wrapper.find('.DropdownActive').exists())
  expect(wrapper.find('.ImageActive').exists())
  header = wrapper.find('[data-testid="DropdownHeader"]')

  header.simulate('click')
  expect(wrapper.find('.Visible').exists()).toEqual(false)
  expect(wrapper.find('.DropdownActive').exists()).toEqual(false)
  expect(wrapper.find('.ImageActive').exists()).toEqual(false)
})

test('Render Correct data', () => {
  const header = wrapper.find('[data-testid="DropdownHeader"]')
  const items = wrapper.find('[data-testid="DropdownItems"]')
  expect(header.text()).toEqual('General')
  expect(items).toHaveLength(mockItems.length)
})
