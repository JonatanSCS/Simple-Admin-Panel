import React from 'react'
import { shallow } from 'enzyme'
import detail from '../../mocks/detail'
import PaymentMethod from './index'

test('Payment Method component renders correctly', () => {
  const data = detail.data.payment.nested_charges[0]
  const wrapper = shallow(<PaymentMethod {...data} />)
  expect(wrapper.find('[data-testid="PaymentMethodContainer"]').exists())
})
