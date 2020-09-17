import React from 'react'
import { shallow } from 'enzyme'

import UserMenu from './index'

const wrapper = shallow(<UserMenu />)
const userData = wrapper.find('[data-testid="UserDataContainer"]')
test('User Menu component renders correctly', () => {
  expect(wrapper.find('[data-testid="UserContainer"]').exists())
})

test('User data open menu and link click close menu', () => {
  const userMenu = wrapper.find('[data-testid="UserMenuContainer"]')

  expect(userMenu.exists()).toBe(false)
  userData.simulate('click')
  expect(userMenu.exists())
})
