import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function Select ({ items, value, onChange }) {
  return (
    <div className="select">
      <select
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid="SelectMain"
        value={value}
      >
        <option disabled>Order by</option>
        {
          items.map(({ value, label }) =>
            <option
              key={value}
              value={value}
              data-testid="SelectOption"
            >
              {label}
            </option>
          )
        }
      </select>
    </div>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Select
