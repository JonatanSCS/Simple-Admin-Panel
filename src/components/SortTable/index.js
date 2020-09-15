import React from 'react'
import PropTypes from 'prop-types'

import DataRow from '../DataRow'

import './styles.css'

function SortTable ({ sorters, active, onChange, items }) {
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
        <tbody>
          {items.map((items) =>
            <DataRow
              key={items.id}
              data={items}
              fields={sorters.map((sorter) => sorter.value)}
            />
          )}
        </tbody>
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
