import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function SortTable ({ sorters, active, onChange }) {
  return (
    <div className="SortTable">
      <table>
        <thead>
          <tr>
            {sorters.map(({ value, label }) =>
              <th
                key={value}
                className={active === value ? 'Active' : ''}
                onClick={() => onChange(value)}
                data-testid="SortTableHeader"
              >
                {label}
              </th>
            )}
          </tr>
        </thead>
      </table>
    </div>

  )
}

SortTable.propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func,
  sorters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }))
}

export default SortTable
