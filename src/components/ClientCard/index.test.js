import React from 'react'

import { shallow } from 'enzyme'
import ClientCard from './index'

const customer = {
  name: 'Juan Lopez',
  email: '',
  phone: '3302646833'
}
const wrapper = shallow(<ClientCard {...customer} />)
test('Client Card renders correctly', () => {
  expect(wrapper.find('[data-testid="ClientCardContainer"]').exists())
})

test('Field thad doesn`t has value, not render', () => {
  expect(wrapper.find('[data-testid="ClientField-name"]').exists())
  expect(wrapper.find('[data-testid="ClientField-email"]').exists()).toBe(false)
  expect(wrapper.find('[data-testid="ClientField-phone"]').exists())
})
