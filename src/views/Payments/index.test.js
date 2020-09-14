import React from 'react'
import { shallow } from 'enzyme'
import Payments from './index'

test('Select render complete options', () => {
  const wrapper = shallow(<Payments />)
  expect(wrapper.find('.Payments').exists())
})
