import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('Page render successfully', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#AppAdminPanel').exists())
})
