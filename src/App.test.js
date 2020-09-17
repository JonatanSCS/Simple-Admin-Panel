import React from 'react'
import { mount } from 'enzyme'
import App from './App'

test('Page render successfully', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('#AppAdminPanel').exists())
})
