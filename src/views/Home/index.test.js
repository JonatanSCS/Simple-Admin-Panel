import React from 'react'

import { shallow } from 'enzyme'
import Home from './index'

test('Home component renders correctly', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper.find('[data-testid="HomeContainer"]').exists())
})
