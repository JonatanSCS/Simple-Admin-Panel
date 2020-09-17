import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import routes from 'routes'

import Dropdown from './Dropdown'
import menuImage from './assets/menu.svg'
import closeImage from './assets/close.svg'
import logoImage from './assets/logo.jpg'
import './styles.css'

function Sidebar ({ history, test }) {
  const [visible, setVisible] = useState(false)
  /* istanbul ignore next */
  !test && history.listen(() => setVisible(false))
  return (
    <div className="Sidebar">
      <img
        src={menuImage}
        alt="open menu"
        className="SidebarIcon"
        data-testid="MenuMobileIcon"
        onClick={() => setVisible(!visible)}
      />
      <nav className={visible ? 'MenuVisible' : ''}>
        <img
          src={closeImage}
          alt="close menu"
          className="SidebarIcon CloseIcon"
          onClick={() => setVisible(!visible)}
          data-testid="CloseMobileIcon"
        />
        <ul>
          <li className="Hero">
            <Link to="/">
              <img src={logoImage} alt="Santa Cruz" />
            </Link>
          </li>
          { routes.map(route => route.id === 'home' ? null : (
            <Dropdown
              key={route.id}
              {...route}
              data-testid="DropdownInstance"
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

Sidebar.propTypes = {
  history: PropTypes.object,
  test: PropTypes.bool
}

export const TestSidebar = Sidebar
export default withRouter(Sidebar)
