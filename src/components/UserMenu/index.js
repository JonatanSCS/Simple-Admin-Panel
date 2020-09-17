import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userImage from './user.png'

import './styles.css'

function UserMenu () {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <div className="UserContainer">
      <div className="UserData" onClick={() => setMenuVisible(!menuVisible)}>
        <img src={userImage} alt="User Image" />
        <p><span>User name</span> Conekta Admin</p>
        <p />
      </div>
      { menuVisible && (
        <ul className="UserMenu">
          <li>
            <Link to="/" onClick={() => setMenuVisible(false)}>Perfil</Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuVisible(false)}>Cerrar sesión</Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default UserMenu
