import React from 'react'

import { shallow } from 'enzyme'
import PaymentStatus from './index'

import detail from '../../mocks/detail'

test('Payment Status Card renders correctly', () => {
  const wrapper = shallow(<PaymentStatus {...detail.data.payment} />)
  expect(wrapper.find('[data-testid="PaymentStatusCard"]').exists())
})

test('Message is showed if failure_message exists', () => {
  const _detail = { ...detail.data.payment }
  let wrapper = shallow(<PaymentStatus {..._detail} />)
  expect(wrapper.find('[data-testid="StatusMaessage"]').exists())
  _detail.nested_charges[0].failure_message = ''
  wrapper = shallow(<PaymentStatus {..._detail} />)
  expect(wrapper.find('[data-testid="StatusMaessage"]').exists()).toBe(false)
})
