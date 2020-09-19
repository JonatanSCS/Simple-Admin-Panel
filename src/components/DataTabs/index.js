import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function DataTabs ({ tabs, active, handleTab }) {
  return (
    <div className="DataTabs container-scroll" data-testid="DataTabsContainer">
      {tabs.map(({ id, label }) => {
        return (
          <button
            data-testid="DataTabsButton"
            key={id}
            className={active === id ? 'Active' : ''}
            onClick={() => handleTab(id)}
          >
            {label}
          </button>
        )
      })}
      <div className="Border"></div>
    </div>
  )
}

DataTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  })),
  active: PropTypes.string,
  handleTab: PropTypes.func
}

export default DataTabs
