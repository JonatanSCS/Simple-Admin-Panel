import React from 'react'
import { shallow } from 'enzyme'
import { PaymentDetailTest, PaymentNavigation } from './index'

test('Payment Detail is rendering correctly', () => {
  const wrapper = shallow(<PaymentDetailTest match={{ params: { id: '123' } }} />)
  const wrapperNav = shallow(<PaymentNavigation payments={[]} />)
  expect(wrapper.find('[data-testid="PaymentDetailContainer"]').exists())
  expect(wrapperNav.find('[data-testid="PaymentNavigation"]').exists())
})
