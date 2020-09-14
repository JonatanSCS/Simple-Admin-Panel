import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function Dropdown ({ id, label, items }) {
  const [visible, setVisible] = useState(false)
  return (
    <li className="Dropdown">
      <p className={visible ? 'DropdownActive' : ''} onClick={() => setVisible(!visible)}>
        <span className="DropdownArrow" />
        <span className={`DropdownImage DropdownImage-${id} ${visible ? 'ImageActive' : ''}`} />
        {label}
      </p>
      <ul className={`Menu ${visible ? 'Visible' : ''}`}>
        <li className="Active">Payments</li>
        {items.map(({ id, label }) => <li key={id}>{label}</li>)}
      </ul>
    </li>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  }))
}

export default Dropdown
