import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../views'

import Dropdown from './Dropdown'
import options from './options'
import menuImage from './assets/menu.svg'
import closeImage from './assets/close.svg'
import logoImage from './assets/logo.jpg'
import './styles.css'

function Sidebar () {
  const [visible, setVisible] = useState(false)
  return (
    <div className="Sidebar">
      <img
        src={menuImage}
        alt="open menu"
        className="SidebarIcon"
        onClick={() => setVisible(!visible)}
        data-testid="MenuMobileIcon"
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
            <Link to={paths.home}>
              <img src={logoImage} alt="Santa Cruz" />
            </Link>
          </li>
          { options.map(item =>
            <Dropdown
              key={item.id}
              {...item}
              closeSidebar={() => setVisible(false)}
              data-testid="DropdownInstance"
            />
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
