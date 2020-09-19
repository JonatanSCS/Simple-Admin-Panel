import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

function Default ({ history }) {
  return (
    <div className="ViewContainer" data-testid="DefaultContainer">
      <h1>View in develop: {history.location.pathname}</h1>
    </div>
  )
}

Default.propTypes = {
  history: PropTypes.object
}

export const DefaultTest = Default
export default withRouter(Default)
