import React from 'react'

import { shallow } from 'enzyme'
import StatusLabel from './index'

test('Status label render correctly', () => {
  const wrapper = shallow(<StatusLabel status="declined" />)
  expect(wrapper.find('[data-testid="StatusLabelContainer"]').exists())
})
