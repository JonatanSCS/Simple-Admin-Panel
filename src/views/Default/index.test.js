import React from 'react'

import { shallow } from 'enzyme'
import { DefaultTest } from './index'

test('Default view renders correctly', () => {
  const wrapper = shallow(<DefaultTest history={{ location: { pathname: '/test-path' } }}/>)
  expect(wrapper.find('[data-testid="DefaultContainer"]').exists())
  expect(wrapper.find('h1').text()).toEqual('View in develop: /test-path')
})
