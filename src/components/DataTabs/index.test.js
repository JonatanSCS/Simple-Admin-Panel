import React from 'react'
import { shallow } from 'enzyme'

import DataTabs from './index'

const tabs = [
  { id: 'data', label: 'Data' },
  { id: 'breakdown', label: 'Breakdown' },
  { id: 'other', label: 'Other' }
]

const onChange = jest.fn()
const wrapper = shallow(<DataTabs tabs={tabs} active="breakdown" handleTab={onChange} />)
test('Render Data Tabs correctly', () => {
  expect(wrapper.find('[data-testid="DataTabsContainer"]'))
})

test('Active tab has Active class', () => {
  expect(wrapper.find('.Active').text()).toEqual('Breakdown')
})

test('Button click trigger handleTab event', () => {
  const tab = wrapper.find('[data-testid="DataTabsButton"]').first()
  tab.simulate('click')
  expect(onChange).toHaveBeenCalled()
})
