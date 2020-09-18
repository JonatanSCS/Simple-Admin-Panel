import React from 'react'

import { shallow } from 'enzyme'
import DataTable from './index'

import detail from 'mocks/detail'

test('Data table renders correctly', () => {
  const headers = [
    { id: 'sku', label: 'SKU' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'name', label: 'Articles' }
  ]
  const items = detail.data.payment.line_items
  const wrapper = shallow(<DataTable headers={headers} items={items} />)
  const headerContainers = wrapper.find('[data-testid="DataTableHead"]')
  const itemContainers = wrapper.find('[data-testid="DataTableItem"]')
  expect(wrapper.find('[data-testid="DataTableContainer"]').exists())
  expect(headerContainers).toHaveLength(headers.length)
  expect(itemContainers).toHaveLength(items.length)
})
