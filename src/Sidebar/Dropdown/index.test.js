import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './index'

const mockRoutes = {
  id: 'developers',
  label: 'Developers',
  items: [
    {
      id: 'developersOne',
      path: '/developers-one',
      label: 'Developers One'
    }, {
      id: 'developersTwo',
      path: '/developers-two',
      label: 'Developers Two'
    }, {
      id: 'developersThree',
      path: '/developers-three',
      label: 'Developers Three'
    }
  ]
}

const wrapper = shallow(<Dropdown id="general" label="General" {...mockRoutes} />)
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
  expect(header.text()).toEqual('Developers')
  expect(items).toHaveLength(mockRoutes.items.length)
})
