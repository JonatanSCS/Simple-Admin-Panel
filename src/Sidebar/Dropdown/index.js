import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'

import './styles.css'

function Dropdown ({ history, label, items, image, test }) {
  const [visible, setVisible] = useState(false)
  /* istanbul ignore next */
  !test && history.listen(() => setVisible(false))
  return (
    <li className="Dropdown">
      <p
        className={`container-align-center ${visible ? 'DropdownActive' : ''}`}
        onClick={() => setVisible(!visible)}
        data-testid="DropdownHeader"
      >
        <span className="DropdownArrow" data-testid="DropdownArrow" />
        <img className ="DropdownImage" src={image} alt="Label" />
        {label}
      </p>
      <ul className={`Menu ${visible ? 'Visible' : ''}`}>
        {items.map(({ id, label, path }) => (
          <li key={id} data-testid="DropdownItems">
            <NavLink to={path} activeClassName="Active">{label}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

Dropdown.propTypes = {
  test: PropTypes.bool,
  history: PropTypes.object,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    path: PropTypes.string
  })),
  image: PropTypes.string
}

export const TestDropdown = Dropdown
export default withRouter(Dropdown)
