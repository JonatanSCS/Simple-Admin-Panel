import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userImage from './user.png'

import './styles.css'

function UserMenu () {
  const [menuVisible, setMenuVisible] = useState(false)
  const links = [{
    id: 'perfil',
    label: 'Perfil',
    path: '/'
  }, {
    id: 'close',
    label: 'Cerrar sesión',
    path: '/'
  }]

  return (
    <div className="UserContainer" data-testid="UserContainer">
      <div className="UserData" onClick={() => setMenuVisible(!menuVisible)} data-testid="UserDataContainer">
        <img src={userImage} alt="User Image" />
        <p><span>User name</span> Conekta Admin</p>
        <p />
      </div>
      { menuVisible && (
        <ul className="UserMenu" data-testid="UserMenuContainer">
          {links.map(({ id, label, path }) => (
            <li key={id}>
              <Link
                to={path}
                onClick={() => setMenuVisible(false)}
                data-testid="UserMenuLink"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserMenu
