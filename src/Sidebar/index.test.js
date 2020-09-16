import React from 'react'
import { shallow } from 'enzyme'
import { TestSidebar } from './index'
import routes from '../routes'

const wrapper = shallow(<TestSidebar test />)
test('Sidebar opens and close on icons clicks', () => {
  const menuIcon = wrapper.find('[data-testid="MenuMobileIcon"]')
  const closeIcon = wrapper.find('[data-testid="CloseMobileIcon"]')
  expect(wrapper.find('MenuVisible').exists()).toBe(false)
  menuIcon.simulate('click')
  expect(wrapper.find('MenuVisible').exists())
  closeIcon.simulate('click')
  expect(wrapper.find('MenuVisible').exists()).toBe(false)
})

test('Sidebar render complete Dropdowns', () => {
  const optionsCount = routes.length - 1
  const dropdowns = wrapper.find('[data-testid="DropdownInstance"]')
  expect(dropdowns).toHaveLength(optionsCount)
})
