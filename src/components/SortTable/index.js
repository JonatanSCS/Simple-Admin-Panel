import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import DataRow from '../DataRow'

import './styles.css'

function SortTable ({ sorters, active, onChange, items }, { location }) {
  return (
    <div className="SortTable">
      <table>
        <thead>
          <tr>
            <th></th>
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
          {items.map((item) =>
            <DataRow
              key={item.id}
              data={item}
              path={useLocation().pathname}
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
  })),
  items: PropTypes.array
}

export default SortTable
